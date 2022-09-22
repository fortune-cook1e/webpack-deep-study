let result = require('./moduleA');

const modules = {
  moduleA: function (webpackRequire) {
    eval('webpackRequire("./moduleA")');
  },
};

const cacheModules = {};

function webpackRequire(id) {
  console.log({ id });
  let currentModule = modules[id](webpackRequire);
  const moduleCalledResult = currentModule();
}

webpackRequire('moduleA');
