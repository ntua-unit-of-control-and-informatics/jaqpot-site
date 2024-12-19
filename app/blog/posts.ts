import { readdir } from 'fs/promises';
import { type Category } from './categories';
import * as path from 'node:path';

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  textPreview: string;
  imageUrl: string;
  author?: {
    description: React.ReactNode | string | undefined;
    avatarUrl: string;
    name: string;
  };
  categories: Category[];
}

export const postsPerPage = 3 as const;

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const postsPath = path.resolve(process.cwd(), 'app/blog/(posts)');

  const slugs = (await readdir(postsPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory()
  );

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories?.indexOf(category) !== -1
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: Category;
}): Promise<{ posts: Post[]; total: number }> {
  const allCategoryPosts = await getPostsByCategory({ category });

  // Get a subset of posts pased on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
}
