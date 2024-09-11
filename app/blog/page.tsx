import Blog from "@/app/blog/components/Blog";
import { getPosts } from "@/app/blog/posts";
import { Metadata } from "next";
import { generateSharedMetadata } from "@/app/shared.metadata";

export const metadata: Metadata = generateSharedMetadata(
  "Blog",
  "Blog posts about Jaqpot and its features",
);

export default async function Page() {
  const posts = await getPosts();

  return <Blog posts={posts} />;
}
