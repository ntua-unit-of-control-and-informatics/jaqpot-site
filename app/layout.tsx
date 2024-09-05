import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { Providers } from "@/providers";

export const metadata = {
  title: "Jaqpot - Create, Upload, and Deploy Machine Learning Models",
  description:
    "Jaqpot is a versatile platform for creating, uploading, and deploying machine learning models using Python. Manage model permissions and access them through an intuitive interface or programmatically via API. Discover the power of Jaqpot at app.jaqpot.org.",
  metadataBase: new URL("https://jaqpot.org"),
};

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
          sfPro.variable,
          inter.variable,
          "bg-gradient-to-br from-indigo-50 via-white to-cyan-100",
        )}
      >
        {/*<div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />*/}
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <Providers>
          <main className="flex min-h-screen w-full py-16">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
