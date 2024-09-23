import Link from "next/link";
import { Metadata } from "next";
import { generateSharedMetadata } from "@/app/shared.metadata";
import PricingCards from "@/app/pricing/components/PricingCards";
import { Button } from "@nextui-org/button";
import Pricing from "@/app/pricing/components/Pricing";

export const metadata: Metadata = generateSharedMetadata(
  "Pricing",
  "Discover Jaqpot's pricing plans and choose the right one for your needs.",
);

export default function PricingPage() {
  return <Pricing />;
}
