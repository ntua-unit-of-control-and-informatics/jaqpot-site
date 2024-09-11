import { Metadata } from "next";

export const openGraphImage = { images: ["/opengraph-image.png"] };
export const jaqpotAppDescription =
  "Jaqpot is an API-driven platform for deploying, managing, and accessing machine learning models. Use open-source or custom models to perform fast and reliable inferences across various data types.";

export const generateSharedMetadata = (
  pageTitle: string = "",
  pageDescription: string = "",
): Metadata => {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    title: `${pageTitle} | Jaqpot`,
    description: `${
      pageDescription ? pageDescription + ". " : ""
    }${jaqpotAppDescription}`,
    openGraph: {
      title: `${pageTitle} | Jaqpot`,
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      type: "website",
      description: `${
        pageDescription ? pageDescription + ". " : ""
      }${jaqpotAppDescription}`,
      ...openGraphImage,
    },
  };
};
