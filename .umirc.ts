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
  plugins: ['./live2d'],
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
