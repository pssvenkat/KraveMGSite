// lib/blog.js — Blog utility functions using gray-matter + markdown
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      author: data.author || 'Krave Microgreens',
      category: data.category || 'Health',
      tags: data.tags || [],
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      featuredImage: data.featuredImage || '/images/blog-default.jpg',
      content,
      ...data,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || '',
    author: data.author || 'Krave Microgreens',
    category: data.category || 'Health',
    tags: data.tags || [],
    excerpt: data.excerpt || content.slice(0, 160) + '...',
    featuredImage: data.featuredImage || '/images/blog-default.jpg',
    ...data,
  };
}

export function getAllCategories() {
  const posts = getAllPosts();
  const cats = [...new Set(posts.map((p) => p.category))];
  return cats;
}

export function getAllTags() {
  const posts = getAllPosts();
  const tags = [...new Set(posts.flatMap((p) => p.tags))];
  return tags;
}

export function getPostsByCategory(category) {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPaginatedPosts(page = 1, perPage = 6) {
  const all = getAllPosts();
  const total = all.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const posts = all.slice(start, start + perPage);
  return { posts, total, totalPages, page };
}
