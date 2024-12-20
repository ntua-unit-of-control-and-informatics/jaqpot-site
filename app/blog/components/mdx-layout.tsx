import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import JaqpotTimeAgo from '@/app/components/JaqpotTimeAgo';
import { Divider } from '@nextui-org/divider';
import { Post } from '@/app/blog/posts';
import Link from 'next/link';
import { User } from '@nextui-org/react';
import Claps from '@/app/blog/components/Claps';

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
      <div className="max-w-full md:max-w-4xl">
        <Card className="px-2 py-5 sm:px-10">
          <CardHeader className="flex flex-col gap-3">
            <div className="flex w-full items-center gap-1">
              <h2
                color="foreground"
                className="text-3xl font-bold sm:text-3xl sm:tracking-tight"
              >
                {metadata.title}
              </h2>
            </div>
            <div className="flex w-full items-center">
              {metadata.author && (
                <User
                  avatarProps={{
                    src: metadata.author.avatarUrl,
                  }}
                  description={metadata.author.description}
                  name={metadata.author.name}
                />
              )}
            </div>
            <div className="flex w-full items-center text-tiny text-gray-400">
              <>
                <CalendarDaysIcon className="mr-2 size-5" />
                <JaqpotTimeAgo
                  date={new Date(metadata.publishDate as unknown as string)}
                />

                {metadata.timeToReadInMin && (
                  <span className="ml-2">
                    · {metadata.timeToReadInMin} min read
                  </span>
                )}
              </>
            </div>
            <Divider className="my-4" />
          </CardHeader>
          <CardBody className="text-base">{children}</CardBody>
          <CardFooter>
            <Claps />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
