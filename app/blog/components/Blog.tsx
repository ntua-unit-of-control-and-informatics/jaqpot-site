import { Post } from '@/app/blog/posts';
import BlogPost from '@/app/blog/components/BlogPost';

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <ol className="flex w-full flex-col items-center gap-5 p-5 sm:py-16">
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
  );
}
