import { Post } from "@/app/blog/posts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link, Image } from "@nextui-org/react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import JaqpotTimeAgo from "@/app/components/JaqpotTimeAgo";
import PageTitle from "@/app/components/PageTitle";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-16">
      <ol>
        {posts.map(
          ({ slug, title, publishDate, imageUrl, textPreview, categories }) => (
            <li key={slug}>
              <Card
                className="max-w-3xl px-10 py-5"
                isPressable
                as={Link}
                href={`/blog/${slug}`}
              >
                <CardHeader className="flex flex-col gap-3">
                  <div className="flex w-full items-center gap-1">
                    {/*<Image*/}
                    {/*  alt="nextui logo"*/}
                    {/*  height={100}*/}
                    {/*  radius="sm"*/}
                    {/*  src={imageUrl || "/jaqpot-j-logo.svg"}*/}
                    {/*  width={100}*/}
                    {/*/>*/}
                    <h2
                      color="foreground"
                      className="text-3xl font-bold sm:text-3xl sm:tracking-tight"
                    >
                      {title}
                    </h2>
                  </div>
                  <div className="flex w-full text-gray-400">
                    <>
                      <CalendarDaysIcon className="mr-2 size-5" />
                      <JaqpotTimeAgo
                        date={new Date(publishDate as unknown as string)}
                      />
                    </>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="line-clamp-3">{textPreview}</p>
                </CardBody>
                {categories && (
                  <>
                    <Divider />
                    <CardFooter>
                      <p>
                        Categories:{" "}
                        {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
                      </p>
                    </CardFooter>
                  </>
                )}
              </Card>
            </li>
          ),
        )}
      </ol>
    </div>
  );
}
