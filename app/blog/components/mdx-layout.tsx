import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import JaqpotTimeAgo from '@/app/components/JaqpotTimeAgo';
import { Divider } from '@nextui-org/divider';
import { Post } from '@/app/blog/posts';

export default function MdxLayout({
  metadata,
  children,
}: {
  metadata: Post;
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <div className="flex w-full justify-center">
      <div className="max-w-3xl ">
        <Card className="px-10 py-5">
          <CardHeader className="flex flex-col gap-3">
            <div className="flex w-full items-center gap-1">
              <h2
                color="foreground"
                className="text-3xl font-bold sm:text-3xl sm:tracking-tight"
              >
                {metadata.title}
              </h2>
            </div>
            <div className="flex w-full items-center text-gray-400">
              <>
                <CalendarDaysIcon className="mr-2 size-5" />
                <JaqpotTimeAgo
                  date={new Date(metadata.publishDate as unknown as string)}
                />
              </>
            </div>
          </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </div>
  );
}
