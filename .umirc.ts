import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: '小朱blogs',
  base: '/blog/',
  publicPath: '/blog/',
  logo: '/blog/logo.png',
  favicon: '/blog/favicon.ico',
  exportStatic: {},
  hash: true,
  navs: [
    null,
    {
      title: '切换源',
      children: [
        { title: '国内源', path: 'https://zjz236.gitee.io/blog/' },
        { title: '国外源', path: 'https://zjz236.github.io/blog/' },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/zjz236',
    },
  ],
  mode: 'site',
  chainWebpack(memo: any, { env, webpack, createCSSRule }: any) {
    memo.module
      .rule('')
      .test(/\.(obj|mtl)(\?.*)?$/)
      .use('')
      .loader('url-loader')
      .options({ limit: 0 });
  },
  // more config: https://d.umijs.org/config
});
