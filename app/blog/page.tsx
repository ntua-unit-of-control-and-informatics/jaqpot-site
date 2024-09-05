import Blog from "@/app/blog/components/Blog";
import { getPosts } from "@/app/blog/posts";

export default async function Page() {
  const posts = await getPosts();

  return <Blog posts={posts} />;
}
