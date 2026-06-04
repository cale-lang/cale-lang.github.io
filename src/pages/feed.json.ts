import { getBlogPostUrl, getBlogPosts, siteUrl } from '../lib/blog';

export const prerender = true;

export async function GET() {
  const posts = await getBlogPosts('ko');
  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Cale Blog',
    home_page_url: `${siteUrl}/blog/`,
    feed_url: `${siteUrl}/feed.json`,
    language: 'ko',
    description: 'Cale compiler, language, Lacail, release, and design notes.',
    items: posts.map((post) => ({
      id: getBlogPostUrl(post),
      url: getBlogPostUrl(post),
      title: post.data.title,
      summary: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      date_modified: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
      tags: [post.data.category, ...post.data.tags],
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
    },
  });
}
