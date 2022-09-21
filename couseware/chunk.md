

## 什么是chunk

## webpack config 
```javascript
output:{
  filename:'main.js',
  chunkFilename:'chunk.[id].js'
}
```

假设一个 webpack 项目配置如下
```javascript
a.js (entry)
b.js
c.js
```

输出的结果: main.js

### 转换的过程
以下转换过程不考虑异步加载模块情况

合并源文件为 chunk :
a.js + b.js + c.js = main.js(chunk)

将chunk 转换为 最终的产物 bundle:

main.js -> main.js(bundle)

### Summary

chunk 是多个模块的集合

在默认情况下 一个chunk 对应一个 bundle