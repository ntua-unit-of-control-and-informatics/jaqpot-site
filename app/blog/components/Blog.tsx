import { Post } from "@/app/blog/posts";
import BlogPost from "@/app/blog/components/BlogPost";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-16">
      <ol>
        {posts.map(
          ({ slug, title, publishDate, imageUrl, textPreview, categories }) => (
            <li key={slug}>
              <BlogPost
                slug={slug}
                title={title}
                publishDate={publishDate}
                textPreview={textPreview}
                categories={categories}
              />
            </li>
          ),
        )}
      </ol>
    </div>
  );
}
