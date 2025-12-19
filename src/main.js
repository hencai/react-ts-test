// src/main.js
import { foo } from './foo.js';

export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
}
