## wepback 如何实现 require 语法

### webpack 是如何加载模块

```javascript

// a.js

module.exports = {
  a: 1,
  b: 2,
};

console.log('this is a module console');

// b.js

const moduleARequireString = "require('./moduleA')";

let moduleB = {
  ['moduleA']: function () {
    eval(moduleARequireString);
  },
};

// 在node环境中通过require语法加载模块
moduleB.moduleA();

```

### node 模块加载

node 模块加载几个重要的变量和特性:
- module
- module.exports
- require 函数
- 模块加载缓存

```javascript
var Module =  {
  id: '.',
  path: '/Users/fortune_cookie/Desktop/coding/github/webpack-deep-study/couseware',
  exports: {},
  filename: '/Users/fortune_cookie/Desktop/coding/github/webpack-deep-study/couseware/node-modules.js',
  loaded: false,
}
```

### 实现 node require语法的思路

```javascript
// webpack 打包的 module map

var modules = {
  ['moduleA']:function(){
    eval('module A code')
  },
  ['moduleB']:function(){
    eval('module B code')
  }
}

```

- 用一个变量(modules)存储所有模块的信息。key为模块的id，value 为一个函数，函数的内部是一个eval函数，eval的参数是 module代码字符串
- 给每一个模块增加一个 module 和 module.exports 对象
- 每次加载模块后，用一个全局模块缓存变量(cacheModules)来存储每个模块 module.exports 的结果
- require 函数实现思路
  - 接收一个 moduleId 参数
  - 根据 moduleId 在全局 modules 对象中查询对应的函数
  - 找到函数后然后执行
  - 将执行的结果放在 cacheModules 中


```javascript
```
