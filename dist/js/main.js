(() => {
  // webpackBootstrap
  'use strict';

  // webpack 集中管理所有模块的map
  // key 为模块地址，value 为 模块 eval执行函数
  // value 每个函数的参数为：
  // 1. module 对象(每一个模块都会生成一个携带 exports 的 对象)
  // 2. module.exports 对象
  // 3. webpack内部实现 CommonJs 的 require 方法
  var __webpack_modules__ = {
    './src/a.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "add": () => (/* binding */ add),\n/* harmony export */   "minus": () => (/* binding */ minus)\n/* harmony export */ });\nvar add = function add(a, b) {\n  return a + b;\n};\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\n//# sourceURL=webpack://webpack-deep/./src/a.js?'
      );
    },

    './src/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/a.js\");\n\nvar a = 10,\n    b = 20;\nvar rootElement = document.getElementById('app');\nvar btnElement = document.createElement('button');\nbtnElement.id = 'btn';\nbtnElement.textContent = 'this is a button';\nrootElement.appendChild(btnElement);\nvar btn = document.getElementById('btn');\n\nbtn.onclick = function () {\n  __webpack_require__.e(/*! import() */ \"src_b_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./b */ \"./src/b.js\")).then(function (res) {\n    var result = res.addDouble(a, b);\n    btnElement.textContent = result;\n  });\n};\n\n//# sourceURL=webpack://webpack-deep/./src/index.js?"
      );
    },
  };
  /************************************************************************/
  // The module cache
  // 用于缓存模块的执行结果
  var __webpack_module_cache__ = {};

  // The require function
  // 用于实现CommonJs的require方法
  // 返回的结果是 对应模块的 导出对象
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    // 执行模块对应的函数：本质上就是执行 eval 函数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = __webpack_modules__;

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    // TIP:给模块暴露出的方法 设置 getter
    // 例如 a.js 导出了 add()方法，那么给 a.js 模块对象的 module.exports 对象设置 key 为 add，getter则返回 add() 函数
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  })();

  /* webpack/runtime/ensure chunk */
  (() => {
    __webpack_require__.f = {};
    // This file contains only the entry chunk.
    // The chunk loading function for additional chunks

    // 异步加载模块
    // f[key] 其实就是对应 f.j 函数
    // 对每一个模块执行 f.j 函数

    __webpack_require__.e = chunkId => {
      return Promise.all(
        Object.keys(__webpack_require__.f).reduce((promises, key) => {
          __webpack_require__.f[key](chunkId, promises);
          return promises;
        }, [])
      );
    };
  })();

  /* webpack/runtime/get javascript chunk filename */
  (() => {
    // This function allow to reference async chunks
    __webpack_require__.u = chunkId => {
      // return url for filenames based on template
      return 'js/chunk.' + chunkId + '.js';
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/load script */
  (() => {
    var inProgress = {};
    var dataWebpackPrefix = 'webpack-deep:';
    // loadScript function to load a script via script tag
    __webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (
            s.getAttribute('src') == url ||
            s.getAttribute('data-webpack') == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
        }
      }
      if (!script) {
        needAttach = true;
        script = document.createElement('script');

        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute('nonce', __webpack_require__.nc);
        }
        script.setAttribute('data-webpack', dataWebpackPrefix + key);
        script.src = url;
      }
      inProgress[url] = [done];
      var onScriptComplete = (prev, event) => {
        // avoid mem leaks in IE.
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var doneFns = inProgress[url];
        delete inProgress[url];
        script.parentNode && script.parentNode.removeChild(script);
        doneFns && doneFns.forEach(fn => fn(event));
        if (prev) return prev(event);
      };
      var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }),
        120000
      );
      script.onerror = onScriptComplete.bind(null, script.onerror);
      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);
    };
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  /* webpack/runtime/publicPath */
  (() => {
    __webpack_require__.p = './';
  })();

  /* webpack/runtime/jsonp chunk loading */
  (() => {
    // no baseURI

    // object to store loaded and loading chunks
    // undefined = chunk not loaded, null = chunk preloaded/prefetched
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded

    // TIP: 这里用于存储已经加载过 or 正在加载的 异步模块
    // key 为 chunkId
    // value 为以下几种：
    // undefined：异步模块还没有加载
    // [resolve,rejecet,promise]: 异步模块正在加载(promise)
    // 0：异步模块已经加载完
    var installedChunks = {
      main: 0,
    };

    // 用JSONP的方法加载javascript
    __webpack_require__.f.j = (chunkId, promises) => {
      // JSONP chunk loading for javascript
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : undefined;

      if (installedChunkData !== 0) {
        // 0 means "already installed".

        // a Promise means "currently loading".
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          if (true) {
            // all chunks have JS
            // setup Promise in chunk cache
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] = [resolve, reject])
            );
            promises.push((installedChunkData[2] = promise));

            // start chunk loading
            var url = __webpack_require__.p + __webpack_require__.u(chunkId);
            // create error before stack unwound to get useful stacktrace later
            var error = new Error();
            var loadingEnded = event => {
              if (__webpack_require__.o(installedChunks, chunkId)) {
                installedChunkData = installedChunks[chunkId];
                if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                if (installedChunkData) {
                  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message =
                    'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                  error.name = 'ChunkLoadError';
                  error.type = errorType;
                  error.request = realSrc;
                  installedChunkData[1](error);
                }
              }
            };

            __webpack_require__.l(url, loadingEnded, 'chunk-' + chunkId, chunkId);
          } else installedChunks[chunkId] = 0;
        }
      }
    };

    // no prefetching

    // no preloaded

    // no HMR

    // no HMR manifest

    // no on chunks loaded

    // install a JSONP callback for chunk loading
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      console.log({ data, parentChunkLoadingFunction });
      var [chunkIds, moreModules, runtime] = data;
      // add "moreModules" to the modules object,
      // then flag all "chunkIds" as loaded and fire callback
      var moduleId,
        chunkId,
        i = 0;
      if (chunkIds.some(id => installedChunks[id] !== 0)) {
        for (moduleId in moreModules) {
          if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
          }
        }
        if (runtime) var result = runtime(__webpack_require__);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          installedChunks[chunkId][0]();
        }
        installedChunks[chunkId] = 0;
      }
    };

    // 这里对 window.webpackChunkwebpack_deep 变量的push方法进行重写
    // 每次异步模块被加载时，都会先触发 push()方法 从而触发 webpackJsonpCallback
    var chunkLoadingGlobal = (self['webpackChunkwebpack_deep'] =
      self['webpackChunkwebpack_deep'] || []);
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
  })();

  /************************************************************************/

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js');
})();
