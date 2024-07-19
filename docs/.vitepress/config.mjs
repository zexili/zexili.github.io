import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZX",
  description: "Hi there, I'm zexi.li",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zexili' }
    ],
    footer: {
      message: 'zexi.li\'s blog',
      copyright: 'Copyright © 2024 ~ 至今 zexili'
    },
    search: {
      provider: 'local'
    }
  },
  sitemap: {
    hostname: 'https://example.com',
    lastmodDateOnly: true
  },
  lastUpdated: true
})
