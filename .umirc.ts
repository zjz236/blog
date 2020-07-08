import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: '小朱blogs',
  base: '/blog/',
  publicPath: '/blog/',
  logo: '/blog/logo.png',
  favicon: '/blog/favicon.ico',
  exportStatic: {},
  dynamicImport: {
    loading: join(__dirname, './components/loading'),
  },
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/zjz236',
    },
  ],
  plugins: ['./plugins/live2d'],
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
