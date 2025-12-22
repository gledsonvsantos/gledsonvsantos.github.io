import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
