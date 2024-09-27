import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/utils';
import {
  ApiResponse,
  errorResponse,
  handleApiResponse,
} from '@/app/util/response';

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse>> {
  const session = await auth();
  if (!isAuthenticated(session)) {
    return errorResponse(
      'You need to be authenticated to access this endpoint',
      401,
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/leads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session!.token}`,
      'Content-Type': 'application/json',
    },
  });

  const apiResponse = await handleApiResponse(res);
  const data = await apiResponse.json();

  if (data.success) {
    const leadUrl = res.headers.get('Location')!;
    const leadUrlParts = leadUrl.split('/');
    const leadId = leadUrlParts[leadUrlParts.length - 1];

    return NextResponse.json(
      { success: true, data: { leadId } },
      { status: 201 },
    );
  } else {
    return errorResponse(data.message);
  }
}
