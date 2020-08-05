# 问题汇总

记录自己平时碰到的问题，防止自己二次错误，有些问题或许很没营养。。。请见谅。

## mpvue 和 van-upload 之间的一些不兼容

问题：在 mpvue 中使用 van-upload 的时候，打算获取上传后的文件，用到一个 event，按照 change 和 click 这种将 bind:change 和 bind:click 转成@change 和@click，将 bind:after-read 转成@after-read，如下所示。

```html
<template>
  <van-uploader
    :max-count="9"
    accept="image"
    :file-list="fileList"
    @after-read="afterRead"
  />
</template>
<script>
  export default {
    methods: {
      afterRead(e) {
        console.log(e);
      },
    },
  };
</script>
```

上传图片的时候发现 after-read 事件没有调用。

解决：mpvue 文档中没发现以`'-'`链接的方法，而是使用的驼峰命名法。

将 vant 的源码里的 after-read 修改成 afterRead

最后在组件页面如下所示

```html
<template>
  <van-uploader
    :max-count="9"
    accept="image"
    :file-list="fileList"
    @afterRead="afterRead"
  />
</template>
<script>
  export default {
    methods: {
      afterRead(e) {
        console.log(e);
      },
    },
  };
</script>
```
