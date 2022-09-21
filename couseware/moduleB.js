const moduleARequireString = "require('./moduleA')";

let moduleB = {
  ['moduleA']: function () {
    eval(moduleARequireString);
  },
};

// 在node环境中通过require语法加载模块
moduleB.moduleA();
