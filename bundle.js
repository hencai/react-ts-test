var index = 42;

// src/main2.js
function main2 () {
  console.log('the answer is ' + index);
}
var babelTestFn = function babelTestFn() {
  console.log("the answer is ".concat(index));
};

export { babelTestFn, main2 as default };
