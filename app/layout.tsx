import "./globals.css";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { Providers } from "@/providers";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Jaqpot - Create, upload, and deploy Machine Learning models",
  description: `Jaqpot is a versatile platform for creating, uploading, and deploying machine learning models using Python. Manage model permissions and access them through an intuitive interface or programmatically via API. Discover the power of Jaqpot at ${process.env.NEXT_PUBLIC_APP_URL}.`,
  metadataBase: new URL("https://jaqpot.org"),
};

const inter = Inter({ subsets: ["latin"] });
const sfPro = localFont({
  src: "./fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={cx(
          inter.variable,
          sfPro.variable,
          "bg-gradient-to-br from-indigo-50 via-white to-cyan-100",
        )}
      >
        {/*<div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />*/}
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <Providers>
          <main className={`flex min-h-screen w-full py-16 ${inter.className}`}>
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
