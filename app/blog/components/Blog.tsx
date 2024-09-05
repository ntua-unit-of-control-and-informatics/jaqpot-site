import { Post } from "@/app/blog/posts";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link, Image } from "@nextui-org/react";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-16">
      <ol>
        {posts.map(({ slug, title, publishDate, imageUrl, categories }) => (
          <li key={slug}>
            <Card className="max-w-3xl">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={imageUrl || "/jaqpot-j-logo.svg"}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
            <h2>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p>
              <strong>Published:</strong>{" "}
              {new Date(publishDate).toLocaleDateString()}{" "}
              <strong>Categories:</strong>{" "}
              {categories?.map((cat, i) => `${i ? ", " : ""}${cat}`)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
