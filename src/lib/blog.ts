import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogLocale = 'ko' | 'en' | 'ja';
export type BlogPost = CollectionEntry<'blog'>;

export const siteUrl = 'https://cale.tools';

export const categoryLabels: Record<string, string> = {
  compiler: 'compiler',
  language: 'language',
  lacail: 'lacail',
  release: 'release',
  'design-note': 'design note',
};

export async function getBlogPosts(locale: BlogLocale = 'ko') {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.lang === locale);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLatestBlogPosts(locale: BlogLocale = 'ko', limit = 3) {
  const posts = await getBlogPosts(locale);
  return posts.slice(0, limit);
}

export function getBlogPostPath(post: BlogPost, locale: BlogLocale = post.data.lang) {
  return locale === 'ko' ? `/blog/${post.id}/` : `/${locale}/blog/${post.id}/`;
}

export function getBlogPostUrl(post: BlogPost) {
  return new URL(getBlogPostPath(post), siteUrl).toString();
}
