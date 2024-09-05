import Posts from "@/app/blog/components/Posts";
import { getPosts, Post } from "@/app/blog/posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
