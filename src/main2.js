// src/main2.js
import { foo } from './foo.js';
import answer from 'the-answer';

export default function () {
  console.log('the answer is ' + answer);
}

export const babelTestFn = () => {
  console.log(`the answer is ${answer}`);
};

console.info(`the answer is ${answer}`);
console.warn(`the answer is ${answer}`);
console.error(`the answer is ${answer}`);
console.log(`the answer is ${answer}`);
