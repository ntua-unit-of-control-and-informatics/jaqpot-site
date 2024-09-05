import { Image, Link } from "@nextui-org/react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import JaqpotTimeAgo from "@/app/components/JaqpotTimeAgo";
import { Divider } from "@nextui-org/divider";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-3xl ">
        <Card className="px-10 py-5">
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </div>
  );
}
