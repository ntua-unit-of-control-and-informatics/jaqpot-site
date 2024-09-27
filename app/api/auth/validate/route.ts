import { NextRequest, NextResponse } from 'next/server';
import {
  ApiResponse,
  errorResponse,
  handleApiResponse,
} from '@/app/util/response';
import { auth } from '@/auth';
import { isAuthenticated } from '@/lib/utils';

export async function GET(
  request: NextRequest,
): Promise<NextResponse<ApiResponse>> {
  const session = await auth();
  if (!isAuthenticated(session)) {
    return errorResponse(
      'You need to be authenticated to access this endpoint',
      401,
    );
  }
  const res = await fetch(`${process.env.API_URL}/v1/auth/validate`, {
    headers: {
      Authorization: `Bearer ${session!.token}`,
      'Content-Type': 'application/json',
    },
  });

  return handleApiResponse(res);
}
