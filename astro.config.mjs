import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.fileuni.com',
  integrations: [
    starlight({
      title: 'FileUni Docs',
      description: 'Official documentation for FileUni.',
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: '.' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/fileuni/official-site-docs/edit/main/',
      },
      social: {
        github: 'https://github.com/fileuni/official-site-docs',
      },
      pagination: true,
      lastUpdated: true,
      customCss: [],
    }),
  ],
});
