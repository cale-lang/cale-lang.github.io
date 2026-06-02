import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cale.tools',
  integrations: [
    react(),
    starlight({
      title: 'Cale',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
        ja: {
          label: '日本語',
          lang: 'ja',
        },
      },
      customCss: ['./src/styles/cale.css'],
      components: {
        Hero: './src/components/CaleHero.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/cale-lang/cale-lang.github.io',
        },
      ],
      sidebar: [
        {
          label: 'Cale',
          items: [
            { label: 'Overview', slug: '' },
            { label: 'Getting Started', slug: 'getting-started' },
            { label: 'Language', slug: 'language' },
            { label: 'Compiler', slug: 'compiler' },
            { label: 'Lacail', slug: 'lacail' },
            { label: 'Qstar', slug: 'qstar' },
            { label: 'Releases', slug: 'releases' },
          ],
        },
      ],
    }),
  ],
});
