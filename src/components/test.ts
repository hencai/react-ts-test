import _ from 'lodash';

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const test1 = [
      { id: 0, title: 'Big Bellies' },
      { id: 1, title: 'Lunar Landscape' },
      { id: 2, title: 'Terracotta Army' },
    ];
    const test2 = [...test1];
    test2[0].title = 'test';
    console.log('test1, test2', test1, test2);
  };
}

{
  class Person {
    #address = '123';
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    update() {
      console.log(123);
      this.#address = '456';
      console.log('address', this.#address);
    }
  }
  const student = new Person('xiaobai', 18);
  student.update();
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const obj = { a: 1, b: { c: 2 } };
    const { a, b: { c: d } } = obj;
    const b: typeof obj = obj;
    console.log(typeof obj);
    console.log('a', a);
    console.log('b', b);
    console.log('d', d);
  };
}

{
  enum Color {
    Red, Green, Blue,
  }
  const c: Color = Color.Green;
  console.log(c);
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    console.log(typeof null);
    const o = {
      a: 'foo',
      b: 12,
      c: 'bar',
    };
    const { a: newName1, b: newName2 }: { a: string, b: number } = o;
    console.log(newName1, newName2);
  };
}

{
  interface SquareConfig {
    color: string
    width: number
    [key: string]: any
  }

  function createSquare(config: SquareConfig): SquareConfig {
    console.log(config);
    return config;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mySquare = createSquare({ color: 'red', width: 100 });
}

{
  type SearchFunc = (source: string, subString: number) => boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mySearch: SearchFunc = function (sb: string, src: number) {
    console.log(sb, src);
    return false;
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function buildName(lastName = 'Smith', firstName: string) {
    return `${firstName} ${lastName}`;
  }
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function test<T>(arg: T) {
    console.log(arg);
    return arg;
  }
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = <T>(arg: T) => {
    console.log(arg);
    return arg;
  };
  // test(123);
  // test('123');
  // test(true);
}

{
  type People = {
    name: string
    age: number
    hobby: number[]
  };
  // 使的接口属性变为可选属性
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type commenPeople = Pick<People, 'name'>;
}

{
  type RecordObj = Record<'a' | 'b' | 'c', string[]>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const obj: RecordObj = {
    a: ['1'],
    b: ['1'],
    c: ['1'],
  };
}

{
  type Test = number | undefined;
  const a: Test = undefined;
  console.log(a || 5);
}

type Alias = { num: number };
interface Interface {
  num: number
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare function aliased(arg: Alias): Alias;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare function interfaced(arg: Interface): Interface;

{
  type Square = {
    kind: 'square'
    size: number
  };
  type Rectangle = {
    kind: 'rectangle'
    width: number
    height: number
  };
  type Circle = {
    kind: 'circle'
    radius: number
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type a = Square | Rectangle | Circle;
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = {
    name: 'xbai',
    age: 18,
    handSome: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type test = typeof a;
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const target = { a: 1, b: 2 };
    const target2 = { c: 3, d: 4 };
    const res = Object.assign(target, target2);
    console.log(target);
    console.log(target2);
    console.log(res);
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const obj = { a: 1, b: { c: 1 } };
    const copy = Object.assign({}, obj);
    copy.a = 2;
    copy.b.c = 3;
    console.log('obj', obj);
    console.log('copy', copy);
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };

    const obj = Object.assign({}, o3, o2, o1);
    console.log(obj); // { a: 1, b: 2, c: 3 }
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const a = ['a', 'b', 'c', 'd'];
    console.log(a);
    console.log(_.chunk(a, 3));
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const a: any = ['a', 'b', 'c', 'd', { d: 5 }];
    const b: any = [1, 2, 3, 4];
    const c = _.concat(a, b);
    console.log('a', a);
    console.log('c', c);
    console.log('修改后');
    c[4].d = 'xbai';
    console.log('a', a);
    console.log('c', c);
  };
}

{
  interface Todo {
    title: string
    description: string
    completed: boolean
    createdAt: number
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type TodoPreview = Omit<Todo, 'description'>;
}

{
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type TodoPreview = Pick<Todo, 'title' | 'completed'>;
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    // console.log('a' in 'a' | 'b');
    console.log('b' in ['a', 'b']);

    console.log(5 < 4 ? 1 : 2);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type MyBool = true | false;

    console.log(Array.isArray([1, 2, 6]));
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debounce = (fn: Function, timeout: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, timeout);
    };
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const throttle = (fn: Function, timeout: number) => {
    let timer: NodeJS.Timeout | null;
    return (...args: any[]) => {
      if (timer) {
        return;
      }

      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, timeout);
    };
  };
}

{
  // const anagrams = (str: string) => {
  //   if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  //   return str
  //     .split('')
  //     .reduce(
  //       (acc, letter, i) =>
  //         acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
  //       [],
  //     );
  // };
  // console.log(anagrams('abcde'));
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const curry = (fn: Function, paramsLength = fn.length, ...args) =>
    args.length < paramsLength ? fn.bind(null, fn, paramsLength, ...args) : fn(...args);

  const deepFlatten = (array: any[]) =>
    array.reduce(
      (result, item) => result.concat(Array.isArray(item) ? deepFlatten(item) : [item]),
      [],
    );

  console.log(deepFlatten([1, 2, [3, 4, [5]], 6]));
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flattenWithDepth = (array: any[], depth: number) =>
    depth === 0
      ? array
      : array.reduce(
        (res, item) => res.concat(Array.isArray(item) ? flattenWithDepth(item, depth - 1) : [item]),
        [],
      );
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flattenOnce = (arr: any[]) => arr.reduce((a, v) => a.concat(v), []);
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const a = new Array(3);
    a.map(item => ({
      text: item?.text,
      name: item?.name,
      sex: item?.sex,
    }));
    console.log(a.length);
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const flatten = (arr: any[]) =>
      arr.reduce((res, cur) => (Array.isArray(cur) ? res.concat(flatten(cur)) : res.concat([cur])), []);

    console.log(flatten([1, 2, [3, 4, [5, [8, 9]]], 6]));
  };
}

// for in 遍历对象key，不推荐 并且遍历原型链 不合适
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    for (const key in { a: 1, b: 2, c: 3 }) {
      console.log(key);
    }
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const data = [1, 3, 5, 7, [4, [6, [7, 9]], 2], 1];

    const flattenToDepth = (target: any[], depth: number) =>
      depth === 0
        ? target
        : target.reduce(
          (res, cur) => res.concat(Array.isArray(cur) ? flattenToDepth(cur, depth - 1) : cur),
          [],
        );

    console.log(flattenToDepth(data, 2));
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const dataA = [[1], [5], [3, 4, 5, 6]];
    const newData = dataA.map(item => (item.length === 1 ? item[0] : item));

    console.log(newData);
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const testObject = {
      a: 1,
      [Symbol.toPrimitive]: (hint: string) => (hint === 'number' ? 123 : 456),
    };
    const s1 = Symbol('1');
    console.log(s1);
    console.log(String(s1));
    console.log(Number(testObject));
  };
}

// 这种方式无法准确还原原始数据的类型
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    const dataA = [[1], [5], [3, 4, 5, 6]];
    const flattenUseString = (array: any[]) =>
      String(array)
        .split(',')
        .map(item => JSON.parse(item));

    console.log(flattenUseString(dataA));
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toArr = (data: any) => (Array.isArray(data) ? data : [data]);
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debounce = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...rest: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...rest);
      }, delay);
    };
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const throttle = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null;
    return (...rest: any[]) => {
      if (!timer) {
        timer = setTimeout(() => {
          fn(...rest);
          timer = null;
        }, delay);
      }
    };
  };
}

// 每隔300ms轮询一次接口，如果接口状态码为200,则停止轮询

/**
 * async / await 输出题
 */

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    async function async1() {
      console.log('async1 start');
      await async2();
      console.log('async1 end'); // 关键在这一步，它相当于放在 callback 中，最后执行
      // 类似于Promise.resolve().then(()=>console.log('async1 end'))
    }

    async function async2() {
      console.log('async2');
    }

    console.log('script start');
    async1();
    console.log('script end');
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    async function async1() {
      console.log('async1 start'); // 2
      await async2();

      // await后面的下面三行都是异步回调callback的内容
      console.log('async1 end'); // 5 关键在这一步，它相当于放在 callback 中，最后执行
      // 类似于Promise.resolve().then(()=>console.log('async1 end'))
      await async3();

      // await后面的下面1行都是异步回调callback的内容
      console.log('async1 end2'); // 7
    }

    async function async2() {
      console.log('async2'); // 3
    }
    async function async3() {
      console.log('async3'); // 6
    }

    console.log('script start'); // 1
    async1();
    console.log('script end'); // 4
  };
}

{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const test = () => {
    async function async1() {
      console.log('async1 start');
      await async2(); // 这一句会同步执行，返回 Promise ，其中的 `console.log('async2')` 也会同步执行
      console.log('async1 end'); // 上面有 await ，下面就变成了“异步”，类似 cakkback 的功能（微任务）
    }

    async function async2() {
      console.log('async2');
    }

    console.log('script start');

    setTimeout(() => { // 异步，宏任务
      console.log('setTimeout');
    }, 0);

    async1();

    new Promise((resolve) => { // 返回 Promise 之后，即同步执行完成，then 是异步代码
      console.log('promise1'); // Promise 的函数体会立刻执行
      resolve('');
    }).then(() => { // 异步，微任务
      console.log('promise2');
    });

    console.log('script end');
  };

  /**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
}

{
  const test = () => {
    new Promise((resove, reject) => {
      reject('');
    }).then(
      (data) => {
        console.log(data, '成功');
      },
      (reason) => {
        console.log(reason, '失败');
      },
    );
  };
}

/**
 * Promise题目
 */
{
  const test = () => {
    const p1 = Promise.resolve().then(() => 100);
    console.log('p1', p1); // fulfilled会触发后续then回调
    p1.then(() => {
      console.log(123);
    }); // 打印123

    const p2 = Promise.resolve().then(() => {
      throw new Error('then error');
    });
    // p2是rejected会触发后续catch回调
    p2.then(() => {
      console.log(456);
    }).catch((err) => {
      console.log(789);
    });
    // 打印789
  };
}

{
  const p1 = Promise.reject('my error').catch(() => {
    console.log('catch error');
  });
  p1.then(() => {
    console.log(1);
  });
  // console.log(p1) p1返回fulfilled 触发then回调
  const p2 = Promise.reject('my error').catch(() => {
    throw new Error('catch error');
  });
  // console.log(p2) p2返回rejected 触发catch回调
  p2.then(() => {
    console.log(2);
  }).catch(() => {
    console.log(3);
  });
}

// {
//   // 第一题
//   Promise.resolve()
//     .then(() => console.log(1))// 状态返回fulfilled
//     .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
//     .then(() => console.log(3)); // 1,3
//   // 整个执行完没有报错，状态返回fulfilled

//   // 第二题
//   Promise.resolve()
//     .then(() => { // then中有报错 状态返回rejected,后面的catch会执行
//       console.log(1);
//       throw new Error('error');
//     })
//     .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
//     .then(() => console.log(3)); // 1,2,3
//   // 整个执行完没有报错，状态返回fulfilled

//   // 第三题
//   Promise.resolve()
//     .then(() => { // then中有报错 状态返回rejected，后面的catch会执行
//       console.log(1);
//       throw new Error('error');
//     })
//     .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的catch不会执行
//     .catch(() => console.log(3)); // 1，2
// // 整个执行完没有报错，状态返回fulfilled
// }

// /**
//  * 浏览器事件循环
//  */

// {
//   console.log('script start');

//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('promise1');
//   })
//     .then(() => {
//       console.log('promise2');
//     });
//   console.log('script end');
//   /**
//    * script start
//    * script end
//    * promise1
//    * promise2
//    * setTimeout
//    */
// }

// {
//   async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
//   }
//   async function async2() {
//     console.log('async2');
//   }

//   console.log('script start');

//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);

//   async1();

//   new Promise((resolve) => {
//     console.log('promise1');
//     resolve('');
//   }).then(() => {
//     console.log('promise2');
//   });
//   console.log('script end');
//   /**
//    * script start
//    * async1 start
//    * async2
//    * promise1
//    * script end
//    * async1 end
//    * promise2
//    * setTimeout
//    */
// }

// {
//   const first = () => (new Promise((resolve, reject) => {
//     console.log(3);
//     const p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//         console.log(5);
//         resolve(6);
//       }, 0);
//       resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => { // 1
//       console.log(arg);
//     });
//   }));

//   first().then((arg) => {
//     console.log(arg); // 2
//   });
//   console.log(4);

//   /**
//    * 3
//    * 7
//    * 4
//    * 1
//    * 2
//    * 5
//    */
// }

// const getVideoDuration = async (file: File) => {
//   // 创建 video DOM 元素  设置播放视频之前加载哪些信息，设置DOM元素加载视频 URL
//   const video = document.createElement('video');
//   video.preload = 'metadata';
//   video.src = URL.createObjectURL(file);

//   // 使用异步阻塞 监听 loadedmetadata 事件，以及error事件，获得视频时长
//   const videoTime = await new Promise<number>((resolve, reject) => {
//     video.addEventListener('loadedmetadata', () => {
//       resolve(video.duration);
//     });

//     video.addEventListener('error', () => {
//       reject();
//     });
//   });

//   // 手动释放URL对象

//   URL.revokeObjectURL(video.src);

//   // 返回视频时长
//   return videoTime;
// };

// const getVideoDuration = async (file: File) => {
//   const video = document.createElement("video");
//   video.preload = "metadata";
//   video.src = URL.createObjectURL(file);

//   const duration = await new Promise<number>((resolve, reject) => {
//     video.addEventListener("loadedmetadata", () => {
//       resolve(video.duration);
//     });

//     video.addEventListener("error", () => {
//       reject();
//     });
//   });

//   URL.revokeObjectURL(video.src);

//   return duration;
// // };

// /**
//  * 防抖,规定时间内执行一次，点击终止上次事件
//  * @param fn
//  * @param delay
//  */
// const debounce0926 = (fn: Function, delay: number) => {
//   let timer: NodeJS.Timeout | null;
//   return (...args: any[]) => {
//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       fn.call(this, ...args);
//       timer = null;
//     }, delay);
//   };
// };

// /**
//  * 节流, 多次执行执行一次，点击不中断 继续等待上次事件执行结果
//  * @param fn
//  * @param delay
//  * @returns
//  */
// const throttle09261 = (fn: Function, delay: number) => {
//   let timer: NodeJS.Timeout | null;
//   return (...args) => {
//     if (timer) {
//       return;
//     }

//     timer = setTimeout(() => {
//       fn.call(this, ...args);
//       timer = null;
//     }, delay);
//   };
// };

// const throttle09262 = (fn: Function, delay: number) => {
//   let lastTime = 0;
//   return (...args) => {
//     const now = Date.now();
//     const spend = now - lastTime;
//     if (spend < delay) {
//       return;
//     }

//     lastTime = Date.now();
//     fn.call(this, ...args);
//   };
// };

// {
//   /**
//    * 实现instanceof
//    */

//   // 实例.__proto__ === 构造函数.prototype
//   const myInstanceof = (instance: any, classOrFunc: any) => {
//     // 实例不是对象返回false  判断instance不是基本数据类型
//     if (typeof instance !== 'object' || instance === null) {
//       return false;
//     }
//     // 构造函数是基本数据类型返回false
//     if (
//       typeof classOrFunc !== 'object'
//       && classOrFunc !== null
//       && typeof classOrFunc !== 'function'
//     ) {
//       return false;
//     }

//     let instanceProto = Object.getPrototypeOf(instance);

//     while (instanceProto) {
//       if (instanceProto === classOrFunc.prototype) return true;
//       instanceProto = Object.getPrototypeOf(instanceProto);
//     }

//     return false;
//   };

//   // console.log('test', myInstanceof(null, Array)); // false
//   // console.log('test', myInstanceof([], Array)); // true
//   // console.log('test', myInstanceof('', Array)); // false
//   // console.log('test', myInstanceof({}, Object)); // true
// }

// {
//   /**
//    * 返回 min - max之间的随机整数,不包含最大值,包含最小值
//    * @param min
//    * @param max
//    * @returns
//    */
//   const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
// }

// {
//   /**
//    *  new过程都干了些什么
//    * @param constructor
//    * @param args
//    */
//   const myNew = (constructor: Function, ...args: any[]) => {
//     const newObj = Object.create(constructor.prototype);

//     const res = constructor.apply(newObj, args);

//     return typeof res === 'object' ? res : newObj;
//   };

//   // 用法

//   function Person(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   // const person = myNew(Person, 'xbai', 18);
//   // console.log(person.name, person.age);
// }

// {
//   const myCall = (context, ...args: any[]) => {
//     if (typeof context !== 'object') context = new Object(context);

//     const symbolKey = Symbol();
//     context[symbolKey] = this;
//     const result = context.symbolKey(...args);
//     delete context[symbolKey];

//     return result;
//   };

//   const myApply = (context, args: any[]) => {
//     if (typeof context !== 'object') context = new Object(context);

//     const symbolKey = Symbol();
//     context[symbolKey] = this;
//     const result = context.symbolKey(...args);
//     delete context[symbolKey];

//     return result;
//   };

//   const myBind = (context, ...args: any[]) => {
//     if (typeof context !== 'object') context = new Object(context);

//     const symbolKey = Symbol();
//     context[symbolKey] = this;
//     const result = (...extendArgs: any[]) => context[symbolKey](...args, ...extendArgs);
//     delete context[symbolKey];

//     return result;
//   };

//   Function.call = myCall;
//   Function.apply = myApply;
//   Function.bind = myBind;
// }

// {
//   /**
//    * 实现深层拷贝
//    * @param obj
//    */
//   const deepClone = (obj: any) => {
//     if (typeof obj !== 'object' || obj === null) {
//       return obj;
//     }

//     const clonedObj = Array.isArray(obj) ? [] : {};

//     // 自身可枚举属性可复制，如果是自身不可枚举属性没办法复制
//     for (const key in clonedObj) {
//       if ((obj as object).hasOwnProperty(key)) {
//         clonedObj[key] = deepClone(obj[key]);
//       }
//     }

//     return clonedObj;
//   };
// }

// // {
// //   Promise.prototype.myResolve = function (param: any) {
// //     if (!(param instanceof Promise)) return param;

// //     return new Promise((resolve, reject) => {
// //       if (param && param.then && typeof param.then === 'function') {
// //         param.then(resolve, reject);
// //         return;
// //       }

// //       resolve(param);
// //     });
// //   };
// // }

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   if (nums.length === 0) return [];
//   if (k === 1) return nums;
//   // 双向队列  会超时
//   const ownQueue = new maxQueue();
//   let count = 0;

//   const res: number[] = [];
//   for (let i = 0; i < k; ++i) {
//     ownQueue.enQueue(nums[i]);
//   }
//   ++count;
//   console.log(ownQueue.maxQueue, `窗口${count}`);
//   res.push(ownQueue.getMax());

//   for (let i = k; i < nums.length; ++i) {
//     ownQueue.deQueue(nums[i - k]);
//     ownQueue.enQueue(nums[i]);
//     ++count;
//     console.log(ownQueue.maxQueue, `窗口${count}`);
//     res.push(ownQueue.getMax());
//   }

//   return res;
// }

// class maxQueue {
//   maxQueue: number[];

//   constructor() {
//     this.maxQueue = [];
//   }

//   enQueue(num: number) {
//     this.maxQueue.push(num);
//     this.maxQueue.sort((a, b) => a - b);
//     // console.log(this.maxQueue);
//     // if (this.maxQueue.length > 3) {
//     //   this.maxQueue.shift();
//     // }
//   }

//   deQueue(num: number) {
//     if (!this.maxQueue.includes(num)) {
//       return;
//     }
//     const firstIndex = this.maxQueue.indexOf(num);
//     this.maxQueue = this.maxQueue.filter((_, index) => index !== firstIndex);
//   }

//   getMax() {
//     return this.maxQueue[this.maxQueue.length - 1];
//   }
// }

// // 携程笔试
// {
//   function gcd(a, b) {
//     while (b !== 0) {
//       const temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }

//   function gcdOfSubarray(arr, start, end) {
//     let result = arr[start];
//     for (let i = start + 1; i <= end; i++) {
//       result = gcd(result, arr[i]);
//     }
//     return result;
//   }

//   function maxGCDSum(arr, m) {
//     const n = arr.length;
//     const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(-Infinity));
//     const prefixGCD = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

//     // Precompute the prefix GCD array
//     for (let i = 1; i <= n; i++) {
//       for (let j = i; j <= n; j++) {
//         prefixGCD[i][j] = gcd(prefixGCD[i - 1][j], arr[j - 1]);
//       }
//     }

//     // Base case: one subarray
//     for (let i = 1; i <= n; i++) {
//       dp[i][1] = prefixGCD[1][i];
//     }

//     // Fill dp array
//     for (let j = 2; j <= m; j++) {
//       for (let i = j; i <= n; i++) {
//         for (let k = j - 1; k < i; k++) {
//           dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + prefixGCD[k + 1][i]);
//         }
//       }
//     }

//     return dp[n][m];
//   }

//   // Example usage:
//   const arr = [5, 6, 4, 2];
//   const m = 2;
//   // console.log(maxGCDSum(arr, m)); // Output the maximum gcd sum
// }

// {
//   const list = [1, 2, 3, 4, 5];
//   const qList = [
//     [1, 2, 3],
//     [2, 2, 4],
//   ];

//   const res: number[] = [];

//   for (const q of qList) {
//     const [op, l, r] = q;
//     let and = op === 1 ? true : false;
//     res.push(
//       list.slice(l - 1, r).reduce((total, cur) => {
//         const result = and ? total & cur : total | cur;
//         and = !and;
//         return result;
//       }),
//     );
//   }
//   // console.log(res);
// }
// {
//   const list: number[] = [1, 2, 3, 4, 5];
//   const qList: number[][] = [
//     [1, 2, 3], // AND, OR, AND
//     [2, 2, 4], // OR, AND, OR
//   ];

//   const res: number[] = [];

//   qList.forEach((op, index) => {
//     const [queryOp, l, r] = op;
//     let result = list[l - 1];
//     let isAnd = queryOp === 1;
//     for (let i = l; i < r; i++) {
//       if (isAnd) {
//         result &= list[i];
//       }
//       else {
//         result |= list[i];
//       }
//       // 交替操作
//       isAnd = !isAnd;
//     }
//     res.push(result);
//   });

//   // console.log(res);
// }

// // 蔚来笔试
// {
// }

// const sadfadfasfas = 1;
// const bdata = 2;
// console.log(bdata);

// // {
// //   const flat = (arr: any[], n: number) =>
// //     n === 0
// //       ? arr
// //       : arr.reduce<any>((res, cur) => res.concat(Array.isArray(cur) ? flat(cur, n - 1) : cur), []);
// //   const data = [1, 2, 3, [4, [5, 6]], 7];
// //   console.log(flat(data, 0));
// //   console.log(flat(data, 1));
// // }

// const testFunc = (a: any) => {};
