import { notFound } from "next/navigation";
import { categories, Category } from "@/app/blog/categories";
import { getPostsByCategory } from "@/app/blog/posts";
import Blog from "@/app/blog/components/Blog";

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const posts = await getPostsByCategory({ category });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Blog posts={posts} />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
