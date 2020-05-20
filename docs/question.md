# 问题汇总

记录自己平时碰到的问题，防止自己二次错误，有些问题或许很没营养。。。请见谅。

## mpvue和van-upload之间的一些不兼容

问题：在mpvue中使用van-upload的时候，打算获取上传后的文件，用到一个event，按照change和click这种将bind:change和bind:click转成@change和@click，将bind:after-read转成@after-read，如下所示。

```html
<template>
  <van-uploader :max-count="9" accept="image" :file-list="fileList" @after-read="afterRead"/>
</template>
<script>
  export default {
    methods: {
      afterRead (e) {
        console.log(e)
	  }
    }
  }
</script>
```

上传图片的时候发现after-read事件没有调用。

解决：mpvue文档中没发现以`'-'`链接的方法，而是使用的驼峰命名法。

将vant的源码里的after-read修改成afterRead

最后在组件页面如下所示

```html
<template>
  <van-uploader :max-count="9" accept="image" :file-list="fileList" @afterRead="afterRead"/>
</template>
<script>
  export default {
    methods: {
      afterRead (e) {
        console.log(e)
	  }
    }
  }
</script>
```
