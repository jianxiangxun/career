const utils = require('./utils')

module.exports = {
  title: 'FE',
  description: '故不积跬步，无以至千里',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '基础',
        link: '/basic/'
      },
      {
        text: '框架',
        link: '/framework/'
      },
      {
        text: '组件化',
        link: '/component/'
      },
      {
        text: '工程化',
        link: '/project/'
      },
      {
        text: '算法',
        link: '/algorithm/tree'
      },
      {
        text: '移动端',
        link: '/mobile/'
      },
      {
        text: 'node',
        link: '/node/'
      }
      // {
      //   text: '生涯',
      //   link: '/career/'
      // },
      // {
      //   text: '简历',
      //   link: '/resume/'
      // }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'jianxiangxun',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
