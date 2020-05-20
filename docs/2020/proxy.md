# 几种常见的脚手架的简单代理方式

## 前言

在平时无论自己开发时，还是项目团队联调时总会发生跨域。自己开发时，端口一般不同，团队开发时，域名、ip、端口都不同。之前我自己开发的时候都是后端处理跨域问题。在海康实习的一段时间里，我发现在海康和后端联调从来没有跨域处理过，而且network里的ip端口也是自己本地前端运行的端口，这时候我稍微关注了一下前端的代理。

## VueCli2下配置代理

在vue-cli的项目根目录下有个config文件夹，打开里面的index.js配置文件，dev长如下所示：

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

如果后端的地址是http://aaa.com:3000，这时候在dev的proxyTable下如下所示：

```javascript
proxyTable: [{
	context: ['/api/'],
	target: 'http://aaa.com:3000',
	changeOrigin: true
}]
```

最后重启项目npm run dev

## VueCli3和VueCli4下配置代理

这里的vue代理是 vue静态服务器做代理。使用的是 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 这个模块。

在vue-cli3的项目根目录下新建vue.config.js配置文件，dev长如下所示：

```javascript
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://aaa.com:3000',
          changeOrigin: true,
          pathRewrite: { }
        }
      }
    }
  }
```

最后重启项目npm run serve

## create-react-app下配置代理

安装http-proxy-middleware:

```bash
npm i http-proxy-middleware
```

在'src'目录下新建'setupProxy.js'并写入：

```javascript
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/api', {
          target: 'http://aaa.com:3000',
          changeOrigin: true,
          pathRewrite: { }
        }
      )
  );
}
```

最后重启项目npm start

## umi下配置代理

在根目录下的.umirc.ts或.umirc.js如下配置

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

最后重启项目npm start