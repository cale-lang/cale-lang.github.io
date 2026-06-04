import { getBlogPostUrl, getBlogPosts, siteUrl } from '../lib/blog';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET() {
  const posts = await getBlogPosts('ko');
  const items = posts
    .map((post) => {
      const url = getBlogPostUrl(post);
      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
  <category>${escapeXml(post.data.category)}</category>
  <description>${escapeXml(post.data.description)}</description>
</item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Cale Blog</title>
  <link>${siteUrl}/blog/</link>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Cale compiler, language, Lacail, release, and design notes.</description>
  <language>ko</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
