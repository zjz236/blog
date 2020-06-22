import { defineConfig } from 'dumi';

export default defineConfig({
  title: '小朱blogs',
  base: '/blog/',
  publicPath: '/blog/',
  logo: '/blog/logo.png',
  favicon: '/blog/favicon.ico',
  exportStatic: {},
  headScripts: [
    {
      src: '/blog/js/three/build/three.js',
    },
    {
      src: '/blog/js/three/examples/js/loaders/OBJLoader.js',
    },
    {
      src: '/blog/js/three/examples/js/loaders/MTLLoader.js',
    },
    {
      src: '/blog/js/three/examples/js/controls/OrbitControls.js',
    },
  ],
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/zjz236',
    },
  ],
  chainWebpack(
    memo: {
      module: {
        rule: (
          arg0: string,
        ) => {
          (): any;
          new (): any;
          test: {
            (arg0: RegExp): {
              (): any;
              new (): any;
              use: {
                (arg0: string): {
                  (): any;
                  new (): any;
                  loader: {
                    (arg0: string): {
                      (): any;
                      new (): any;
                      options: { (arg0: { limit: number }): void; new (): any };
                    };
                    new (): any;
                  };
                };
                new (): any;
              };
            };
            new (): any;
          };
        };
      };
    },
    { env, webpack, createCSSRule }: any,
  ) {
    memo.module
      .rule('')
      .test(/\.(obj|mtl)(\?.*)?$/)
      .use('')
      .loader('url-loader')
      .options({ limit: 0 });
  },
  // more config: https://d.umijs.org/config
});
