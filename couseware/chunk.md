

## 什么是chunk

## webpack config 
```javascript
output:{
  filename:'main.js',
  chunkFilename:'chunk.[id].js'
}
```

假设一个 webpack 搭建的项目源文件如下
```javascript
a.js (entry)
b.js
c.js
```

输出的结果: main.js

### 转换的过程
以下转换过程不考虑异步加载模块、代码切割等情况

合并源文件为 chunk :
a.js + b.js + c.js = main.js(chunk)

将 chunk 转换为 最终的产物 bundle:

main.js -> main.js(bundle)

## 异步 chunk
简而言之就是 webpack 采取异步的形式加载 chunk 


### 如何写出异步加载代码
- require.ensure
- import() 函数
- react suspense + lazy

### 异步chunk的优势
- 优化首屏加载速度
- 按需加载模块

### Summary

chunk 分为 同步chunk 和 异步chunk 两种

chunk 是多个模块的集合

在默认情况下 一个 chunk 对应一个 bundle

