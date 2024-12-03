import './globals.css';
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';
import { Providers } from '@/providers';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Jaqpot - Create, upload, and deploy Machine Learning models',
  description: `Jaqpot is a versatile platform for creating, uploading, and deploying machine learning models using Python. Manage model permissions and access them through an intuitive interface or programmatically via API. Discover the power of Jaqpot at ${process.env.NEXT_PUBLIC_APP_URL}.`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

const inter = Inter({ subsets: ['latin'] });
const sfPro = localFont({
  src: './fonts/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`bg-gradient-to-br from-indigo-50 via-white to-cyan-100  ${inter.className}`}
      >
        {/*<div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />*/}
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <Providers>
          <SessionProvider session={session}>
            <main className={`flex min-h-screen w-full px-3 py-8 sm:py-16`}>
              {children}
            </main>
          </SessionProvider>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
