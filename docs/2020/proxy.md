# 几种常见的脚手架的简单代理方式

## 前言

在平时无论自己开发时，还是项目团队联调时总会发生跨域。自己开发时，端口一般不同，团队开发时，域名、ip、端口都不同。后面我稍微关注了一下几种常见脚手架的代理方式。

## VueCli2 下配置代理

在 vue-cli 的项目根目录下有个 config 文件夹，打开里面的 index.js 配置文件，dev 长如下所示：

```javascript
dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
 }
```

如果后端的地址是http://aaa.com:3000 ，这时候在 dev 的 proxyTable 下如下所示：

```javascript
proxyTable: [
  {
    context: ['/api/'],
    target: 'http://aaa.com:3000',
    changeOrigin: true,
  },
];
```

最后重启项目 npm run dev

## VueCli3 和 VueCli4 下配置代理

这里的 vue 代理是 vue 静态服务器做代理。使用的是 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 这个模块。

在 vue-cli3 的项目根目录下新建 vue.config.js 配置文件，dev 长如下所示：

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://aaa.com:3000',
        changeOrigin: true,
        pathRewrite: {},
      },
    },
  },
};
```

最后重启项目 npm run serve

## create-react-app 下配置代理

安装 http-proxy-middleware:

```bash
npm i http-proxy-middleware
```

在'src'目录下新建'setupProxy.js'并写入：

```javascript
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://aaa.com:3000',
      changeOrigin: true,
      pathRewrite: {},
    }),
  );
};
```

最后重启项目 npm start

## umi 下配置代理

在根目录下的.umirc.ts 或.umirc.js 如下配置

```javascript
import { defineConfig } from 'umi';

export default defineConfig({
  ...
  proxy: {
     '/api': {
        target: 'http://aaa.com:3000',
        changeOrigin: true,
        pathRewrite: { }
     }
  },
  ...
});

```

最后重启项目 npm start
