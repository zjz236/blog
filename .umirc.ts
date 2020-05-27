import { defineConfig } from 'dumi';

export default defineConfig({
  title: '小朱blogs',
  base: '/blog/',
  publicPath: '/blog/',
  logo: '/blog/logo.png',
  favicon: '/blog/favicon.ico',
  exportStatic: {},
  links: ['https://imsun.github.io/gitment/style/default.css'],
  scripts: [
    { src: 'https://imsun.github.io/gitment/dist/gitment.browser.js' },
    `var gitment = new Gitment({
      id: 'root',
      owner: 'zjz236',
      repo: 'blog_comments',
      oauth: {
        client_id: '181f82e74c1bef24a114',
        client_secret: '5cb1575776ef8f28e0abe651fa625d95dda2d8c6',
      },
    })
    gitment.render('container')`,
  ],
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/zjz236',
    },
  ],
  // more config: https://d.umijs.org/config
});
