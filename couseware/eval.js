// eval 函数

function test() {
  console.log('test');
}

test();

// eval
let str = 'function test(){console.log("test")}; test()';

eval(str);
