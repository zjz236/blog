import { defineConfig } from 'dumi';

export default defineConfig({
  title: '小朱blogs',
  base: '/blog/',
  publicPath: '/blog/',
  logo: '/blog/logo.png',
  favicon: '/blog/favicon.ico',
  exportStatic: {},
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/zjz236',
    },
  ],
  // more config: https://d.umijs.org/config
});
