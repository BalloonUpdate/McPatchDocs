// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'McPatchDocs',
  tagline: 'Minecraft客户端文件更新解决方案',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https:///mcpatchdocs.akio.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BalloonUpdate', // Usually your GitHub org/user name.
  projectName: 'McPatchDocs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BalloonUpdate/McPatchDocs/tree/V2.0',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BalloonUpdate/McPatchDocs/tree/V2.0',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'support_us',
        content: '该版本仍在编写，请查阅 <a href="https://balloonupdate.github.io/McPatchDocs/">V1版本文档</a> & <a href="https://balloonupdate.github.io/McPatchDocsNext/">V2版本文档</a>',
        backgroundColor: '#2E8555',
        textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        title: 'McPatchDocs',
        logo: {
          alt: 'McPatchDocs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '更新日志', position: 'left'},
          {
            href: 'https://jq.qq.com/?_wv=1027&k=PqAEtn39',
            label: 'QQ群',
            position: 'right',
          },
          {
            href: 'https://github.com/BalloonUpdate',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'V1版本',
            items: [
              {
                label: '管理端',
                href: 'https://github.com/BalloonUpdate/McPatchManage',
              },
              {
                label: '客户端',
                href: 'https://github.com/BalloonUpdate/McPatchClient',
              },
              {
                label: '服务端',
                href: 'https://github.com/BalloonUpdate/MiniHttpServer',
              },
            ],
          },
          {
            title: 'V2版本',
            items: [
              {
                label: '管理端 & 客户端',
                href: 'https://github.com/BalloonUpdate/McPatch2',
              },
              {
                label: '加载器',
                href: 'https://github.com/BalloonUpdate/McPatch2Loader',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '官方文档',
                href: 'https://github.com/BalloonUpdate/McPatchDocs',
              },
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=PqAEtn39',
              },
              {
                label: '爱发电',
                href: 'https://afdian.net/a/aprilforest',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} McPatch`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
