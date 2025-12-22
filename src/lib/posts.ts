import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace('.md', '');
    return { slug };
  });
}

export function getPostContent(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  return fs.readFileSync(fullPath, 'utf8');
}
