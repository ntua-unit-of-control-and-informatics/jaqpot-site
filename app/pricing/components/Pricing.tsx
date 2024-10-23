'use client';

import { Button } from '@nextui-org/button';
import { signIn, useSession } from 'next-auth/react';
import { isAuthenticated } from '@/lib/utils';
import toast from 'react-hot-toast';
import { ApiResponse } from '@/app/util/response';
import { useCallback, useState } from 'react';

export default function Pricing() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const createEarlyAccessRequest = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await fetch('/api/leads', {
        method: 'POST',
      });

      const { success, message, data }: ApiResponse = await res.json();
      if (success) {
        toast.success(
          'Early access request sent successfully! We will contact you with further details on how to get full access to Jaqpot',
        );
      } else {
        toast.error('An error occurred while sending the request: ' + message);
      }
    } catch (error: unknown) {
      toast.error('An unknown error occurred: ' + error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center from-white to-blue-50">
      <section className="rounded p-2 text-center ">
        {/*<PricingCards />*/}
        <h4 className="mb-4 text-indigo-600">Early access</h4>
        <h1 className="my-4 text-5xl font-extrabold leading-[3.5rem] tracking-tight text-slate-900">
          Want full access to Jaqpot?
        </h1>
        <p className="m-auto my-8 max-w-2xl text-lg text-gray-600">
          We are still in beta, therefore our API is rate limited to 5.000
          predictions per day, but if you want full, unrestricted access, click
          the button below. We&apos;ll send you an email with everything you
          need to get started.
        </p>

        {isAuthenticated(session) && (
          <Button
            size="lg"
            color="primary"
            isLoading={isLoading}
            isDisabled={isLoading}
            onPress={async () => createEarlyAccessRequest()}
          >
            Request early access
          </Button>
        )}

        {!isAuthenticated(session) && (
          <div>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 ">
              Please log in or create an account to request for early access.
            </p>
            <Button
              size="lg"
              color="primary"
              onPress={() => signIn('keycloak')}
            >
              Sign in
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
