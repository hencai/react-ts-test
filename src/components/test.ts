import { chunk, concat } from 'lodash';
import { useEffect, useRef, useState } from 'react';

{
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
  // const student = new Person('xiaobai', 18);
  // student.update();
}

{
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

  const test = () => {
    console.log(c);
  };
}

{
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

  const test = () => {
    const mySquare = createSquare({ color: 'red', width: 100 });
  };
}

{
  type SearchFunc = (source: string, subString: number) => boolean;
  const mySearch: SearchFunc = function (sb: string, src: number) {
    console.log(sb, src);
    return false;
  };
}

{
  function buildName(lastName = 'Smith', firstName: string) {
    return `${firstName} ${lastName}`;
  }
}

{
  function test<T>(arg: T) {
    console.log(arg);
    return arg;
  }
}

{
  const func = <T>(arg: T) => {
    console.log(arg);
    return arg;
  };
  const test = () => {
    func(123);
    func('123');
    func(true);
  };
}

{
  type People = {
    name: string
    age: number
    hobby: number[]
  };
  // 使的接口属性变为可选属性
  type commenPeople = Pick<People, 'name'>;
}

{
  type RecordObj = Record<'a' | 'b' | 'c', string[]>;
  const obj: RecordObj = {
    a: ['1'],
    b: ['1'],
    c: ['1'],
  };
}

{
  type Test = number | undefined;

  const test = () => {
    const a: Test = undefined;
    console.log(a || 5);
  };
}

type Alias = { num: number };
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias;
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

  type a = Square | Rectangle | Circle;
}

{
  const a = {
    name: 'xbai',
    age: 18,
    handSome: false,
  };

  type test = typeof a;
}

{
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
  const test = () => {
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };

    const obj = Object.assign({}, o3, o2, o1);
    console.log(obj); // { a: 1, b: 2, c: 3 }
  };
}

{
  const test = () => {
    const a = ['a', 'b', 'c', 'd'];
    console.log(a);
    console.log(chunk(a, 3));
  };
}

{
  const test = () => {
    const a: any = ['a', 'b', 'c', 'd', { d: 5 }];
    const b: any = [1, 2, 3, 4];
    const c = concat(a, b);
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

  type TodoPreview = Omit<Todo, 'description'>;
}

{
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = Pick<Todo, 'title' | 'completed'>;
}

{
  const test = () => {
    // console.log('a' in 'a' | 'b');
    console.log('b' in ['a', 'b']);

    console.log(5 < 4 ? 1 : 2);
    type MyBool = true | false;

    console.log(Array.isArray([1, 2, 6]));
  };
}

{
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
  const test = () => {
    const anagrams = (str: string): string[] => {
      if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

      return str
        .split('')
        .reduce<string[]>(
          (acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i)).map(item => letter + item)),
          [],
        );
    };
    console.log(anagrams('abcde'));
  };
}

{
  const test = () => {
    const curry = (fn: Function, paramsLength = fn.length, ...args: any[]) =>
      args.length < paramsLength ? fn.bind(null, fn, paramsLength, ...args) : fn(...args);

    const deepFlatten = (array: any[]) =>
      array.reduce(
        (result, item) => result.concat(Array.isArray(item) ? deepFlatten(item) : [item]),
        [],
      );

    console.log(deepFlatten([1, 2, [3, 4, [5]], 6]));
  };
}

{
  const flattenWithDepth = (array: any[], depth: number) =>
    depth === 0
      ? array
      : array.reduce(
        (res, item) => res.concat(Array.isArray(item) ? flattenWithDepth(item, depth - 1) : [item]),
        [],
      );
}

{
  const flattenOnce = (arr: any[]) => arr.reduce((a, v) => a.concat(v), []);
}

{
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
  const test = () => {
    const flatten = (arr: any[]) =>
      arr.reduce((res, cur) => (Array.isArray(cur) ? res.concat(flatten(cur)) : res.concat([cur])), []);

    console.log(flatten([1, 2, [3, 4, [5, [8, 9]]], 6]));
  };
}

// for in 遍历对象key，不推荐 并且遍历原型链 不合适
{
  const test = () => {
    for (const key in { a: 1, b: 2, c: 3 }) {
      console.log(key);
    }
  };
}

{
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
  const test = () => {
    const dataA = [[1], [5], [3, 4, 5, 6]];
    const newData = dataA.map(item => (item.length === 1 ? item[0] : item));

    console.log(newData);
  };
}

{
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
  const toArr = (data: any) => (Array.isArray(data) ? data : [data]);
}

{
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

// 轮询接口
// 每隔300ms轮询一次接口，如果接口状态码为200,则停止轮询
// 1、简单实现
//  开启一个300ms的间隔期，每次都发送一个请求，请求成功停止轮询，请求成功或者失败都停止轮询
//  缺点：服务端成本较高，每隔300ms就接受了一次请求，如果响应时间过久，就会导致到一定时间第一次请求的结果成功了，但是后面的请求都已经发出，无法终止，如何终止后面的请求，是优化的关键
// 2、第二种写法，如果一旦成功，取消之后的所有请求

{
  const test = () => {
    // 1、简单实现，不考虑成功之后其他请求的处理
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const poll1 = async (url: string, param?: string) => {
      const timer = setInterval(() => {
        fetchData(url, param).then((res: any) => {
          if (res.code === 200) {
            clearInterval(timer);
          }
          return res.data;
        }, (err: any) => {
          clearInterval(timer);
          return err;
        });
      }, 300);

      return () => void clearInterval(timer);
    };

    // 2、前端终止逻辑，后端无法收到终止的信号，只是前端不再接受后端请求的成功或失败的结果
    const queue: { resolve: Function, reject: Function }[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const poll2 = async (url: string, param: string) => {
      const timer = setInterval(async () => {
        try {
          const result = await new Promise<any>((resolve, reject) => {
            queue.push({ resolve, reject });
            fetchData(url, param)
              .then((data: any) => {
                resolve(data);
              }, (err: any) => {
                reject(err);
              })
              .finally(() => {
                queue.splice(queue.findIndex(item => item.resolve === resolve), 1);
                // 成功之后终止其余请求，清楚定时器
                clearInterval(timer);
                for (const { reject } of queue) {
                  reject('已经成功');
                }
              });
          });

          return result;
        }
        catch (error: any) {
          console.log('promise发生错误', error);
        }
      }, 300);
    };

    // 3、最完美的实现
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const poll3 = async (url: string, param: string) => {
      const controller = new AbortController();
      const timer = setTimeout(() => {
        controller.abort();
      }, 300);

      try {
        // 如果被AbortController终止之后就会抛出一个错误
        // 1、AbortError
        // 2、TimeoutError
        // 3、其余网络请求可能发生的请求错误
        const result = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        return result;
      }
      catch (err: any) {
        clearTimeout(timer);
        if (err instanceof DOMException && err.name === 'AbortError') {
          return poll3(url, param);
        }
        else {
          return err;
        }
      }
    };

    const fetchData = async (url: string, param?: string) => {
      let result;
      console.log(url, param);
      // 类似这种拿到请求数据
      // result = await axios.post(url, param);

      return result;
    };
  };

  test();
}

/**
 * async / await 输出题
 */

{
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }).catch((err) => {
      console.log(789);
    });
    // 打印789
  };
}

{
  const test = () => {
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
  };
}

/**
 * promise 输出
 */
// 第一题
{
  const test = () => {
    Promise.resolve()
      .then(() => console.log(1))// 状态返回fulfilled
      .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
      .then(() => console.log(3)); // 1,3
    // 整个执行完没有报错，状态返回fulfilled
  };
}

// 第二题
{
  const test = () => {
    Promise.resolve()
      .then(() => { // then中有报错 状态返回rejected,后面的catch会执行
        console.log(1);
        throw new Error('error');
      })
      .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的then会执行
      .then(() => console.log(3)); // 1,2,3
    // 整个执行完没有报错，状态返回fulfilled
  };
}

// 第三题
{
  const test = () => {
    Promise.resolve()
      .then(() => { // then中有报错 状态返回rejected，后面的catch会执行
        console.log(1);
        throw new Error('error');
      })
      .catch(() => console.log(2)) // catch中没有报错，状态返回fulfilled，后面的catch不会执行
      .catch(() => console.log(3)); // 1，2
    // 整个执行完没有报错，状态返回fulfilled
  };
}

/**
 * 浏览器事件循环
 */
{
  const test = () => {
    console.log('script start');

    setTimeout(() => {
      console.log('setTimeout');
    }, 0);

    Promise.resolve().then(() => {
      console.log('promise1');
    })
      .then(() => {
        console.log('promise2');
      });
    console.log('script end');
    /**
     * script start
     * script end
     * promise1
     * promise2
     * setTimeout
     */
  };
}

{
  const test = () => {
    async function async1() {
      console.log('async1 start');
      await async2();
      console.log('async1 end');
    }
    async function async2() {
      console.log('async2');
    }

    console.log('script start');

    setTimeout(() => {
      console.log('setTimeout');
    }, 0);

    async1();

    new Promise((resolve) => {
      console.log('promise1');
      resolve('');
    }).then(() => {
      console.log('promise2');
    });
    console.log('script end');
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
  };
}

{
  const test = () => {
    const first = () => (new Promise((resolve) => {
      console.log(3);
      const p = new Promise((resolve) => {
        console.log(7);
        setTimeout(() => {
          console.log(5);
          resolve(6);
        }, 0);
        resolve(1);
      });
      resolve(2);
      p.then((arg) => { // 1
        console.log(arg);
      });
    }));

    first().then((arg) => {
      console.log(arg); // 2
    });
    console.log(4);

    /**
     * 3
     * 7
     * 4
     * 1
     * 2
     * 5
     */
  };
}

{
  const getVideoDuration = async (file: File) => {
    // 创建 video DOM 元素  设置播放视频之前加载哪些信息，设置DOM元素加载视频 URL
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(file);

    // 使用异步阻塞 监听 loadedmetadata 事件，以及error事件，获得视频时长
    const videoTime = await new Promise<number>((resolve, reject) => {
      video.addEventListener('loadedmetadata', () => {
        resolve(video.duration);
      });

      video.addEventListener('error', () => {
        reject();
      });
    });

    // 手动释放URL对象

    URL.revokeObjectURL(video.src);

    // 返回视频时长
    return videoTime;
  };
}

{
  const getVideoDuration = async (file: File) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = URL.createObjectURL(file);

    const duration = await new Promise<number>((resolve, reject) => {
      video.addEventListener('loadedmetadata', () => {
        resolve(video.duration);
      });

      video.addEventListener('error', () => {
        reject();
      });
    });

    URL.revokeObjectURL(video.src);

    return duration;
  };
}

/**
 * 防抖,规定时间内执行一次，点击终止上次事件
 * @param fn
 * @param delay
 */
{
  const debounce = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null;
    return (...args: any[]) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        fn.call(this, ...args);
        timer = null;
      }, delay);
    };
  };
}

/**
 * 节流, 多次执行执行一次，点击不中断 继续等待上次事件执行结果
 * @param fn
 * @param delay
 * @returns
 */
{
  const throttle = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null;
    return (...args: any[]) => {
      if (timer) {
        return;
      }

      timer = setTimeout(() => {
        fn.call(this, ...args);
        timer = null;
      }, delay);
    };
  };
}

{
  const throttle = (fn: Function, delay: number) => {
    let lastTime = 0;
    return (...args: any[]) => {
      const now = Date.now();
      const spend = now - lastTime;
      if (spend < delay) {
        return;
      }

      lastTime = Date.now();
      fn.call(this, ...args);
    };
  };
}

/**
 * 实现instanceof
 */
{
  const test = () => {
    // 实例.__proto__ === 构造函数.prototype
    const myInstanceof = (instance: any, classOrFunc: any) => {
      // 实例不是对象返回false  判断instance不是基本数据类型
      if (typeof instance !== 'object' || instance === null) {
        return false;
      }
      // 构造函数是基本数据类型返回false
      if (
        typeof classOrFunc !== 'object'
        && classOrFunc !== null
        && typeof classOrFunc !== 'function'
      ) {
        return false;
      }

      let instanceProto = Object.getPrototypeOf(instance);

      while (instanceProto) {
        if (instanceProto === classOrFunc.prototype) return true;
        instanceProto = Object.getPrototypeOf(instanceProto);
      }

      return false;
    };

    console.log('test', myInstanceof(null, Array)); // false
    console.log('test', myInstanceof([], Array)); // true
    console.log('test', myInstanceof('', Array)); // false
    console.log('test', myInstanceof({}, Object)); // true
  };
}

{
  /**
   * 返回 min - max之间的随机整数,不包含最大值,包含最小值
   * @param min
   * @param max
   * @returns
   */
  const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
}

/**
 *  new过程都干了些什么
 * @param constructor
 * @param args
 */
{

  // const test = () => {
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

  //   const person = myNew(Person, 'xbai', 18);
  //   console.log(person.name, person.age);
  // };
}

{

  // const test = () => {
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
  // };
}

/**
 * 实现深层拷贝
 * @param obj
 */
{
  // const deepClone = (obj: any) => {
  //   if (typeof obj !== 'object' || obj === null) {
  //     return obj;
  //   }

  //   const clonedObj = Array.isArray(obj) ? [] : {};

  //   // 自身可枚举属性可复制，如果是自身不可枚举属性没办法复制
  //   for (const key in clonedObj) {
  //     if (obj.hasOwnProperty(key)) {
  //       clonedObj[key] = deepClone(obj[key]);
  //     }
  //   }

  //   return clonedObj;
  // };
}

{
  // Promise.prototype.myResolve = function (param: any) {
  //   if (!(param instanceof Promise)) return param;

  //   return new Promise((resolve, reject) => {
  //     if (param && param.then && typeof param.then === 'function') {
  //       param.then(resolve, reject);
  //       return;
  //     }

  //     resolve(param);
  //   });
  // };
}

{
  function maxSlidingWindow(nums: number[], k: number): number[] {
    if (nums.length === 0) return [];
    if (k === 1) return nums;
    // 双向队列  会超时
    const ownQueue = new maxQueue();
    let count = 0;

    const res: number[] = [];
    for (let i = 0; i < k; ++i) {
      ownQueue.enQueue(nums[i]);
    }
    ++count;
    console.log(ownQueue.maxQueue, `窗口${count}`);
    res.push(ownQueue.getMax());

    for (let i = k; i < nums.length; ++i) {
      ownQueue.deQueue(nums[i - k]);
      ownQueue.enQueue(nums[i]);
      ++count;
      console.log(ownQueue.maxQueue, `窗口${count}`);
      res.push(ownQueue.getMax());
    }

    return res;
  }
}

class maxQueue {
  maxQueue: number[];

  constructor() {
    this.maxQueue = [];
  }

  enQueue(num: number) {
    this.maxQueue.push(num);
    this.maxQueue.sort((a, b) => a - b);
    if (this.maxQueue.length > 3) {
      this.maxQueue.shift();
    }
  }

  deQueue(num: number) {
    if (!this.maxQueue.includes(num)) {
      return;
    }
    const firstIndex = this.maxQueue.indexOf(num);
    this.maxQueue = this.maxQueue.filter((_, index) => index !== firstIndex);
  }

  getMax() {
    return this.maxQueue[this.maxQueue.length - 1];
  }
}

// 携程笔试
{
  const test = () => {
    function gcd(a: number, b: number) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function gcdOfSubarray(arr: number[], start: number, end: number) {
      let result = arr[start];
      for (let i = start + 1; i <= end; i++) {
        result = gcd(result, arr[i]);
      }
      return result;
    }

    function maxGCDSum(arr: number[], m: number) {
      const n = arr.length;
      const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(-Infinity));
      const prefixGCD = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

      // Precompute the prefix GCD array
      for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
          prefixGCD[i][j] = gcd(prefixGCD[i - 1][j], arr[j - 1]);
        }
      }

      // Base case: one subarray
      for (let i = 1; i <= n; i++) {
        dp[i][1] = prefixGCD[1][i];
      }

      // Fill dp array
      for (let j = 2; j <= m; j++) {
        for (let i = j; i <= n; i++) {
          for (let k = j - 1; k < i; k++) {
            dp[i][j] = Math.max(dp[i][j], dp[k][j - 1] + prefixGCD[k + 1][i]);
          }
        }
      }

      return dp[n][m];
    }

    // Example usage:
    const arr = [5, 6, 4, 2];
    const m = 2;
    console.log(maxGCDSum(arr, m)); // Output the maximum gcd sum
  };
}

{
  const test = () => {
    const list = [1, 2, 3, 4, 5];
    const qList = [
      [1, 2, 3],
      [2, 2, 4],
    ];

    const res: number[] = [];

    for (const q of qList) {
      const [op, l, r] = q;
      let and = op === 1 ? true : false;
      res.push(
        list.slice(l - 1, r).reduce((total, cur) => {
          const result = and ? total & cur : total | cur;
          and = !and;
          return result;
        }),
      );
    }
    console.log(res);
  };
}

{
  const test = () => {
    const list: number[] = [1, 2, 3, 4, 5];
    const qList: number[][] = [
      [1, 2, 3], // AND, OR, AND
      [2, 2, 4], // OR, AND, OR
    ];

    const res: number[] = [];

    qList.forEach((op) => {
      const [queryOp, l, r] = op;
      let result = list[l - 1];
      let isAnd = queryOp === 1;
      for (let i = l; i < r; i++) {
        if (isAnd) {
          result &= list[i];
        }
        else {
          result |= list[i];
        }
        // 交替操作
        isAnd = !isAnd;
      }
      res.push(result);
    });

    console.log(res);
  };
}

{
  const test = () => {
    const flat = (arr: any[], n: number) =>
      n === 0
        ? arr
        : arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? flat(cur, n - 1) : cur), []);
    const data = [1, 2, 3, [4, [5, 6]], 7];
    console.log(flat(data, 0));
    console.log(flat(data, 1));
  };
}

// 笔试
{
  const test = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const count = (n: number, m: number, directions: ('L' | 'R' | 'U' | 'D')[][]) => {
      const TIME = Math.pow(10, 8);
      const directionMap = {
        L: [0, -1],
        R: [0, 1],
        U: [-1, 0],
        D: [1, 0],
      };

      let grid = Array.from({ length: n }, () => Array(m).fill(1));

      for (let t = 0; t < TIME; t++) {
        const newGrid = Array.from({ length: n }, () => Array(m).fill(0));

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < m; j++) {
            const robots = grid[i][j];
            if (robots > 0) {
              const [di, dj] = directionMap[directions[i][j]];
              const ni = i + di;
              const nj = j + dj;
              if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                newGrid[ni][nj] += robots;
              }
            }
          }
        }

        grid = newGrid;
      }

      let remainingRobots = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          remainingRobots += grid[i][j];
        }
      }

      return remainingRobots;
    };
    // const [n, m] = input[0].split(' ').map(item => Number(item));
    // input.pop();
    // const directions = [...input.slice(1).map(item => item.split(''))];

    // console.log(count(n, m, directions));
  };
}

// 笔试
{
  const test = () => {
    const func = (matrix: number[][]) => {
      if (!matrix.length || !matrix[0].length) {
        return [];
      }

      const rows = matrix.length;
      const columns = matrix[0].length;
      const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));

      const total = rows * columns;
      const order = new Array(total).fill(0);

      let directionIndex = 0,
        row = 0,
        column = 0;

      const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ];

      for (let i = 0; i < total; i++) {
        order[i] = matrix[row][column];
        visited[row][column] = true;

        const nextRow = row + directions[directionIndex][0];
        const nextColumn = column + directions[directionIndex][1];

        if (!(nextRow >= 0 && nextRow < rows && nextColumn >= 0 && nextColumn < columns && !visited[nextRow][nextColumn])) {
          directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
      }

      return order[order.length - 1];
    };

    const testArr = [
      [9, 7, 5, 3, 2],
      [4, 6, 8, 0, 1],
    ];

    console.log(func(testArr));
  };
}

// 笔试
{
  const test = () => {
    const robot = (modes: number[], distance: number) => {
      modes.sort((a, b) => b - a);
      let steps = 0;
      let currentDistance = 0;

      while (distance > 0) {
        while (currentDistance <= distance && modes[0] > distance) {
          currentDistance += modes[0];
        }

        if (currentDistance > distance) {
          modes.shift();
          currentDistance -= distance;
          distance = 0;
        }
        else {
          distance -= currentDistance;
          currentDistance = 0;
          steps++;
        }
      }

      return distance === 0 ? steps : -1;
    };

    console.log(robot([2, 4, 5], 12));
  };
}

// 笔试
{
  const test = () => {
    const last = (str: string) => {
      const reversedList = [];
      for (const char of str) {
        reversedList.unshift(char);
      }

      const res = '';

      for (let index = 0; index < reversedList.length; index++) {
        const curList = reversedList.join('').slice(index, 1).split('');
        if (!curList.includes(reversedList[index])) {
          return reversedList[index];
        }
        index++;
      }

      return res;
    };

    console.log(last('shoppoee'));
  };
}

// 笔试
{
  const test = () => {
    const minJumps = (modes: number[], distance: number) => {
      if (distance === 0) return 0;

      if (modes.length === 0) return -1;

      const dp = new Array(distance + 1).fill(Infinity);

      dp[0] = 0;

      for (let i = 1; i <= distance; i++) {
        for (const mode of modes) {
          if (mode <= i) {
            dp[i] = Math.min(dp[i], dp[i - mode] + 1);
          }
        }
      }

      return dp[distance] === Infinity ? -1 : dp[distance];
    };

    console.log(minJumps([2, 4, 5], 12));
  };
}

// 自己练习场景题
{
  const test = () => {
    class ownerMap {
      map: Map<any, any>;
      _map: WeakMap<object, any>;

      constructor() {
        this.map = new Map();
        this._map = new WeakMap();
      }

      isObject(key: any) {
        return typeof key === 'object' && key !== null;
      }

      get(key: any) {
        return this.isObject(key) ? this._map.get(key) : this.map.get(key);
      }

      set(key: any, value: any) {
        if (this.isObject(key)) {
          this._map.set(key, value);
          return;
        }

        this.map.set(key, value);
      }

      has(key: any) {
        return this.isObject(key) ? this._map.has(key) : this.map.has(key);
      }

      delete(key: any) {
        if (this.isObject(key)) {
          this._map.delete(key);
          return;
        }

        this.map.delete(key);
      }
    }

    const memorize = function (fn: Function) {
      const resFunction = (object: any) => {
        if (resFunction.cache.has(object)) {
          return resFunction.cache.get(object);
        }

        resFunction.cache.set(object, fn(object));
        return resFunction.cache.get(object);
      };

      resFunction.cache = new ownerMap();

      return resFunction;
    };

    const object = { a: 1, b: 2 };
    const other = { c: 3, d: 4 };

    const values = memorize((obj: object) => Object.values(obj));

    console.log(values(object));

    console.log(values(other));

    object.a = 2;
    console.log(values(object));

    values.cache.set(object, ['a', 'b']);

    console.log(values(object));
  };
}

{
  const test = () => {
    const list = [1, 2, 3, 4, 5];
    const list2 = list.map((item) => {
      if (item === 3) {
        return;
      }
      return item + 1;
    });

    console.log(list2);
  };
}

{
  const test = () => {
    const m = 2;
    const list = [5, 6, 3, 2];
    const subList: number[][] = [];

    if (list.length === m * 2) {
      for (let i = 0; i < m; ++i) {
        subList.push(list.slice(i, i + 2));
      }
    }

    console.log(subList);

    const res = subList.map(item => gcdArray(item));
    console.log(res);

    function gcdArray(arr: number[]) {
      let result = arr[0];
      for (let i = 0; i < arr.length; ++i) {
        result = gcd(result, arr[i]);
      }

      return result;
    }

    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
  };
}

// 防抖： 多次执行，只执行最近一次
{
  const debounce = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null = null;
    return (...args: any[]) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
}

// 节流，规定时间之内
{
  const throttle1 = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout | null = null;
    return (...args: any[]) => {
      if (!timer) {
        setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, delay);
      }
    };
  };

  const throttle2 = (fn: Function, delay: number) => {
    let last = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - last >= delay) {
        last = now;
        fn.apply(this, args);
      }
    };
  };
  // setInterval(throttle2(() => {
  //   console.log(2);
  // }, 1000), 1);

  // setInterval(throttle1(() => {
  //   console.log(2);
  // }, 1000), 1001);
}

// 手撕promiseAll
// 如果成功入数组，失败 | 非promise 返回失败的原因
{
  const promiseAll = (promises: any[]) => {
    return new Promise((resolve, reject) => {
      const res: any[] = [];
      if (promises.length === 0) {
        resolve(res);
      }

      for (const promise of promises) {
        if (!(promise instanceof Promise)) {
          reject('非promise对象');
        }

        promise.then((data: unknown) => {
          res.push(data);

          if (res.length === promises.length) {
            resolve(data);
          }
        }, (reason: any) => {
          reject(reason);
        });
      }
    });
  };
}

// 数组去重
// 第一种
{
  const test = () => {
    const duplicate = (list: number[]) => Array.from(new Set(list));
    console.log(duplicate([1, 2, 2, 3, 4]));
  };
  // test();
}

// 第二种
{
  const test = () => {
    const duplicate = (list: number[]) => list.filter((num, index) => list.indexOf(num) === index);
    console.log(duplicate([1, 2, 2, 3, 4]));
  };
  // test();
}

// 第三种
{
  const test = () => {
    const duplicate = (list: number[]) => list.reduce<number[]>((res, num) => res.includes(num) ? res : res.concat(num), []);
    console.log(duplicate([1, 2, 2, 3, 4]));
  };
  // test();
}

// 数组扁平化
// 第一种
{
  const test = () => {
    const flatten = (arr: any[], depth: number) => {
      return arr.flat(depth);
    };
    console.log(flatten([1, 2, 3, [4, 5, [6, 7]]], 1));
  };
  // test();
}

// 第二种
{
  const test = () => {
    const flatten = (arr: any[], depth: number) => depth === 0
      ? arr
      : arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? flatten(cur, depth - 1) : cur), []);
    console.log(flatten([1, 2, 3, [4, 5, [6, 7]]], 2));
  };
  // test();
}

// 第三种  同第二种写法的展开写法
{
  const test = () => {
    const flatten = (arr: any[], depth: number) => {
      if (depth === 0) return arr;
      let res: any[] = [];
      for (const data of arr) {
        res = res.concat(Array.isArray(data) ? flatten(data, depth - 1) : data);
      }
      return res;
    };
    console.log(flatten([1, 2, 3, [4, 5, [6, 7]]], 1));
  };
  // test();
}

// 第四种  迭代栈
{
  const test = () => {
    const flatten = (arr: any[], depth: number) => {
      const stack: any[] = arr.map(item => [item, depth]);
      const res: any[] = [];

      while (stack.length > 0) {
        const [item, depth] = stack.pop();
        if (Array.isArray(item) && depth > 0) {
          stack.push(...item.map(el => [el, depth - 1]));
        }
        else {
          res.push(item);
        }
      }

      return res.reverse();
    };
    console.log(flatten([1, 2, 3, [4, 5, [6, 7]]], 0));
  };
  // test();
}

// for of / for in 遍历可迭代对象的区别
{
  const test = () => {
    const data = [5, 4, 3, 2, 1];
    for (const num in data) {
      console.log(num, typeof num);
    }
    for (const num of data) {
      console.log(num, typeof num);
    }
  };
}

// 手撕深拷贝;
// 第一种JSON.stringify 和 JSON.parse
{
  const test = () => {
    const deepClone = (data: any) => JSON.parse(JSON.stringify(data));

    const obj1 = { a: { b: 1, c: 2 }, d: 3 };
    const obj2 = [1, 2, [3, 4]];
    const copy1 = deepClone(obj1);
    const copy2 = deepClone(obj2);
    console.log('obj1:', obj1, 'copy1:', copy1, copy1 === obj1);
    console.log('obj2:', obj2, `copy2: ${copy2}`, copy2 === obj2);
  };
  // test();
}

// 第二种
// 函数无法拷贝
{
  const test = () => {
    const deepClone = (data: any) => {
      if (!(data !== null && typeof data === 'object')) {
        return data;
      }

      let copy: Record<string, any> | any[] = {};
      // let copy: { [key: string]: string } | any[] = {};

      if (Array.isArray(data)) {
        copy = [];
        for (const ele of data) {
          copy.push(deepClone(ele));
        }
      }
      else {
        for (const key in data) {
          copy[key] = deepClone(data[key]);
        }
      }

      return copy;
    };

    const obj1 = { a: { b: 1, c: 2 }, d: 3 };
    const obj2 = [1, 2, [3, 4]];
    const copy1 = deepClone(obj1);
    const copy2 = deepClone(obj2);
    console.log('obj1:', obj1, 'copy1:', copy1, copy1 === obj1);
    console.log('obj2:', obj2, 'copy2:', copy2, copy2 === obj2);
  };
  // test();
}

// 实现promise.race
// 传入一个promise数组,哪个promise实例最先完成，就返回其结果，无论是成功还是失败的结果
{
  const test = () => {
    const race = (promises: any[]): Promise<any> => {
      return new Promise((resolve, reject) => {
        for (const promise of promises) {
          promise instanceof Promise
            ? promise.then(resolve, reject)
            : reject('数组中必须全部是promise实例');
        }
      });
    };
    // 使用示例
    const promise1 = new Promise(resolve => setTimeout(() => resolve('one'), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('two'), 2000));
    const promise3 = new Promise(resolve => setTimeout(() => resolve('three'), 3000));

    race([promise1, promise2, promise3]).then((value) => {
      console.log(value); // 输出 'one'，因为promise1最先解决
    });
  };
  // test();
}

// 实现filter函数

// 扩展 Function 原型

{
  const test = () => {
    Array.prototype.filter = function (callback: (ele: any, index: number, curArray: any[]) => boolean, context = this) {
      const filtedList: any[] = [];
      for (let i = 0; i < this.length; ++i) {
        if (callback.call(context, this[i], i, this)) {
          filtedList.push(this[i]);
        }
      }

      return filtedList;
    };

    const result = [1, 2, 3, 4, 4, 5, 5, 6].filter((item, index, cur) => index === cur.indexOf(item));
    console.log(result);
  };
  // test();
}

// 反转字符串，输入www.a.com.cn，输出cn.com.a.www
{
  const test = () => {
    const reverse = (params: string) => params.split('.').reverse().join('.');
    console.log(reverse('www.a.com.cn'));
  };

  // test();
}

/**
 * 设计一个函数，传入请求url数组，限制并发的请求个数limit，全部执行完毕以后执行callback（PS：这里我理解错了面试官的意思，他的意思是例如有100个请求，并发请求数为3，那么就会有最多三个请求一起执行，其中一个执行完了之后会有新的请求执行）
 */
{
  const test = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const concurrent = (urls: string[], limit: number) => {
      let index = 0;
      const startTask = () => {
        if (index >= urls.length) return;
        fetchUrl(urls[index++]).then(() => {
          console.log('处理成功的回调');
        }).catch(() => {
          console.log('处理失败的回调');
        }).finally(() => {
          startTask();
        });
      };

      while (index < limit) {
        startTask();
      }
    };

    function fetchUrl(url: string) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // do something to request url for data
          const data = url;
          resolve(data);
        }, Math.floor(Math.random() * 10000));
      });
    }
  };
}

// 希尔排序
{
  const test = () => {
    const xier = (params: number[]) => {
      const n = params.length;

      for (let gap = n >> 1; gap > 0; gap >>= 1) {
        for (let i = gap; i < n; ++i) {
          let prefix = i;
          while (prefix >= gap && params[prefix - gap] > params[prefix]) {
            [params[prefix], params[prefix - gap]] = [params[prefix - gap], params[prefix]];
            prefix -= gap;
          }
        }
      }
      return params;
    };

    console.log(xier([8, 7, 6, 5, 4]));
  };
  // test();
}

// 大顶堆
{
  const test = () => {
    class Heap {
      heap: number[];
      constructor() {
        this.heap = [];
      }

      // 上浮操作
      _bubbleUp(index: number) {
        while (index > 0) {
          const parentIndex = (index - 1) >> 1;
          if (this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
          }
          else break;
        }
      }

      // 下沉操作
      _bubbleDown(index: number) {
        while (true) {
          const leftIndex = (index << 1) + 1;
          const rightIndex = leftIndex + 1;
          let nextIndex = index;
          if (leftIndex < this.size() && this.heap[leftIndex] > this.heap[index]) {
            nextIndex = leftIndex;
          }
          if (rightIndex < this.size() && this.heap[rightIndex] > this.heap[index]) {
            nextIndex = rightIndex;
          }

          if (nextIndex === index) break;
          this.swap(index, nextIndex);
          index = nextIndex;
        }
      }

      // 添加
      push(item: number) {
        this.heap.push(item);
        this._bubbleUp(this.size() - 1);
      }

      // 删除并返回栈顶元素
      pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this._bubbleDown(0);
        return top;
      }

      // 获取最大元素
      peek() {
        return this.heap[0];
      }

      // 获取最大栈长度
      size() {
        return this.heap.length;
      }

      swap(index1: number, index2: number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
      }

      isEmpty() {
        return this.size() === 0;
      }
    }

    const maxHeap = new Heap();
    maxHeap.push(5);
    maxHeap.push(3);
    maxHeap.push(8);
    maxHeap.push(9);
    maxHeap.push(2);
    console.log(maxHeap.heap);
    console.log(maxHeap.pop()); // 输出 8
    console.log(maxHeap.peek()); // 输出 5
  };
  // test();
}

// 小顶堆
{
  const test = () => {
    class Heap {
      heap: number[];
      constructor() {
        this.heap = [];
      }

      push(item: number) {
        this.heap.push(item);
        this._bubbleUp(this.size() - 1);
      }

      pop() {
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this._bubbleDown(0);

        return top;
      }

      isEmpty() {
        return this.size() === 0;
      }

      peek() {
        return this.heap[0];
      }

      _bubbleUp(index: number) {
        while (index > 0) {
          const parentIndex = (index - 1) >> 1;
          if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
          }
          else break;
        }
      }

      _bubbleDown(index: number) {
        while (true) {
          const leftIndex = (index << 1) + 1;
          const rightIndex = (index << 1) + 2;

          let nextIndex = index;
          if (leftIndex < this.size() && this.heap[nextIndex] > this.heap[leftIndex]) {
            nextIndex = leftIndex;
          }
          if (rightIndex < this.size() && this.heap[nextIndex] > this.heap[rightIndex]) {
            nextIndex = rightIndex;
          }

          if (nextIndex === index) break;
          this.swap(index, nextIndex);
          index = nextIndex;
        }
      }

      size() {
        return this.heap.length;
      }

      swap(index1: number, index2: number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
      }
    }

    const minHeap = new Heap();
    minHeap.push(5);
    minHeap.push(3);
    minHeap.push(8);
    console.log(minHeap.pop()); // 输出 3
    console.log(minHeap.peek()); // 输出 5
  };

  // test();
}

// 堆排序
{
  class Heap {
    heap: number[];
    constructor() {
      this.heap = [];
    }

    push(item: number) {
      this.heap.push(item);
      this._bubbleUp(this.size() - 1);
    }

    pop() {
      if (this.size() === 1) return this.heap.pop();

      const top = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this._bubbleDown(0);

      return top;
    }

    isEmpty() {
      return this.size() === 0;
    }

    peek() {
      return this.heap[0];
    }

    _bubbleUp(index: number) {
      while (index > 0) {
        const parentIndex = (index - 1) >> 1;
        if (this.heap[index] < this.heap[parentIndex]) {
          this.swap(index, parentIndex);
          index = parentIndex;
        }
        else break;
      }
    }

    _bubbleDown(index: number) {
      while (true) {
        const leftIndex = (index << 1) + 1;
        const rightIndex = (index << 1) + 2;

        let nextIndex = index;
        if (leftIndex < this.size() && this.heap[nextIndex] > this.heap[leftIndex]) {
          nextIndex = leftIndex;
        }
        if (rightIndex < this.size() && this.heap[nextIndex] > this.heap[rightIndex]) {
          nextIndex = rightIndex;
        }

        if (nextIndex === index) break;
        this.swap(index, nextIndex);
        index = nextIndex;
      }
    }

    size() {
      return this.heap.length;
    }

    swap(index1: number, index2: number) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  }
  const test = () => {
    const heapSort = (nums: number[]) => {
      const minHeap = new Heap();
      for (const num of nums) {
        minHeap.push(num);
      }

      return nums.map(() => minHeap.pop());
    };

    console.log(heapSort([5, 1, 1, 2, 0, 0]));
  };

  // test();
}

// 快排 --- 随机切分
{
  const test = () => {
    const quickSort = (nums: number[], start: number, end: number) => {
      if (start >= end) return;

      const mid = partrition(nums, start, end);
      quickSort(nums, start, mid - 1);
      quickSort(nums, mid + 1, end);

      return nums;
    };

    function partrition(nums: number[], start: number, end: number) {
      const randomIndex = start + Math.floor(Math.random() * (end - start) + 1);
      [nums[randomIndex], nums[start]] = [nums[start], nums[randomIndex]];

      const pivot = nums[start];
      let lt = start;

      for (let i = start + 1; i <= end; ++i) {
        if (nums[i] < pivot) {
          ++lt;
          [nums[lt], nums[i]] = [nums[i], nums[lt]];
        }
      }

      [nums[lt], nums[start]] = [nums[start], nums[lt]];
      return lt;
    };

    console.log(quickSort([1, 3, 2, 5, 6, 4], 0, 5));
  };

  // test();
}

// 快排 --- 对撞指针
// 以第一个数字为初始pivot
{
  const test = () => {
    const quickSort = (nums: number[], start: number, end: number) => {
      if (start >= end) return nums;

      const mid = partrition(nums, start, end);
      quickSort(nums, start, mid - 1);
      quickSort(nums, mid + 1, end);

      return nums;
    };

    function partrition(nums: number[], start: number, end: number) {
      const pivot = nums[start];
      let left = start + 1;
      let right = end;
      while (left < right) {
        // 找出左边第一个大于 pivot 的坐标
        while (left < right && nums[left] <= pivot) {
          ++left;
        }

        // 找出右边第一个小于于 pivot 的坐标
        while (left < right && nums[right] >= pivot) {
          --right;
        }

        // 找到了存在的两个索引进行交换
        if (left < right) {
          [nums[left], nums[right]] = [nums[right], nums[left]];
          ++left;
          --right;
        }
      }

      // 如果走到同一个数
      if (left === right && nums[right] > pivot) {
        --right;
      }

      if (right !== start) {
        [nums[right], nums[start]] = [nums[start], nums[right]];
      }

      return right;
    }

    console.log(quickSort([1, 3, 2, 5, 6, 4], 0, 5));
  };

  // test();
}

{
  const test = () => {
    const quickSort = (nums: number[], start: number, end: number) => {
      if (start >= end) return;

      const mid = partrition(nums, start, end);
      quickSort(nums, start, mid - 1);
      quickSort(nums, mid + 1, end);

      return nums;
    };

    function partrition(nums: number[], start: number, end: number) {
      const randomIndex = start + Math.floor(Math.random() * (end - start) + 1);
      [nums[randomIndex], nums[start]] = [nums[start], nums[randomIndex]];

      const pivot = nums[start];

      let lt = start;
      let gt = end + 1;
      let i = start + 1;
      while (i < gt) {
        if (nums[i] < pivot) {
          ++lt;
          [nums[i], nums[lt]] = [nums[lt], nums[i]];
          ++i;
        }
        else if (nums[i] === pivot) {
          ++i;
        }
        else {
          --gt;
          [nums[i], nums[gt]] = [nums[gt], nums[i]];
        }
      }

      [nums[lt], nums[start]] = [nums[start], nums[lt]];

      return lt;
    };

    console.log(quickSort([1, 3, 2, 5, 6, 4], 0, 5));
  };

  // test();
}

// 途虎笔试
{
  // 给定一个数组 返回一个集合，这个输入数组中的数据可以重复使用，返回的集合包括 数组中不同元素的组合方式，集合中的组合应该不重复 。js实现 例如【2,3,6】，需要和为8的 所有集合  输出结果为[[2,2,2,2], [2, 3, 3], [2, 6]  使用js实现

  const test = () => {
    function combinationSum(candidates: number[], target: number) {
      const result: number[][] = [];
      const path: number[] = [];

      candidates = candidates.sort((a, b) => a - b); // 排序以便我们可以剪枝

      function backtrack(remain: number, start: number) {
        if (remain === 0) {
          result.push([...path]);
          return;
        }

        for (let i = start; i < candidates.length; i++) {
          if (candidates[i] > remain) break; // 剪枝，因为数组已经排序

          path.push(candidates[i]);
          backtrack(remain - candidates[i], i); // 再次调用，注意我们使用 i 而不是 start
          path.pop();
        }
      }

      backtrack(target, 0);
      return result;
    }

    // 示例输入
    const candidates = [2, 3, 6];
    const target = 8;

    // 获取组合
    const combinations = combinationSum(candidates, target);

    // 打印结果
    console.log(combinations);
  };

  // test();
}

// 循环索引
{
  const test = () => {
    const recurIndex = (start: number, end: number) => {
      let total = 0;
      let cur = start;
      while (total < 30) {
        console.log(cur);
        cur = (cur + 1) % (end + 1) === 0 ? start : (cur + 1) % (end + 1);
        ++total;
      }
    };

    recurIndex(1, 10);
  };

  // test();
}

// JS实现一个带有并发限制的调度器，保证同时最多运行2个任务
{
  const test = () => {
    class Scheduler {
      queue: Function[];
      isRunning: number;

      constructor() {
        this.queue = [];
        this.isRunning = 0;
      }

      add(fn: () => Promise<void>) {
        if (this.isRunning < 2) {
          this.isRunning++;
          return fn().then(() => {
            this.isRunning--;
            this.queue.length && this.queue.shift()?.();
          });
        }
        else {
          return new Promise<void>((resolve) => {
            this.queue.push(resolve);
          }).then(() => {
            this.isRunning++;
            return fn().then(() => {
              this.isRunning--;
              this.queue.length && this.queue.shift()?.();
            });
          });
        }
      }
    }

    const timeout = (time: number) => new Promise<void>((resolve) => {
      setTimeout(resolve, time);
    });

    const scheduler = new Scheduler();

    const addTask = (time: number, order: number) => {
      scheduler.add(() => timeout(time)).then(() => {
        console.log(order);
      });
    };

    addTask(4000, 4);
    addTask(2000, 2);
    addTask(3000, 3);
    addTask(900, 1);
  };

  // test();
  //  2 4 1 3
}

// 并行执行promise调度
{
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = () => {
      function parallelLimit(allTasks: (() => Promise<any>)[], limitCount: number) {
        let runningCount = 0; // 正在运行的任务数量
        let index = 0; // 使用闭包保存任务数组的当前索引

        function startTask() {
          if (index < allTasks.length) {
            const task = allTasks[index++];
            runningCount++;
            task().then(() => {
              runningCount--;
              startTask(); // 已经开启的任务谁先结束，继续往后走，启动下一个任务
            });
          }
        }

        while (runningCount < limitCount) {
          startTask(); // 启动任务直到达到限制数量
        }
      }
      const createPromise = (time: number, info: number) => new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          console.log(info);
        }, time);
      });

      const allTasks: (() => Promise<void>)[] = [];
      allTasks.push(() => createPromise(4000, 4));
      allTasks.push(() => createPromise(2000, 2));
      allTasks.push(() => createPromise(3000, 3));
      allTasks.push(() => createPromise(900, 1));

      parallelLimit(allTasks, 2);
    };

    // test();
  }

  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = () => {
      function parallelBatches(allTasks: (() => Promise<void>)[], limitCount: number) {
        allTasks.length > limitCount
          ? Promise.all(allTasks.slice(0, limitCount).map(fn => fn())).then(() => {
            parallelBatches(allTasks.slice(limitCount), limitCount);
          })
          : Promise.all(allTasks.map(fn => fn()));
      }

      const createPromise = (time: number, info: number) => new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          console.log(info);
        }, time);
      });

      const allTasks: (() => Promise<void>)[] = [];
      allTasks.push(() => createPromise(4000, 4));
      allTasks.push(() => createPromise(2000, 2));
      allTasks.push(() => createPromise(3000, 3));
      allTasks.push(() => createPromise(900, 1));

      parallelBatches(allTasks, 2);
    };

    // test();
  }
}
// 列表类型定义
type ListItem = {
  id: number
  name: string
  parentId: number | null

};
// 树类型定义
type Tree = {
  id: number
  name: string
  parentId: number | null
  children: Tree[]
};
// 列表转树
{
  const test = () => {
    // 使用map实现
    const listToTree = (list: ListItem[]) => {
      // 用来存储每个节点的结构
      const map = new Map<number, Tree>();

      // 获取根节点的id
      const rootId = list.find(item => item.parentId === null)?.id || 0;

      // 初始化每个节点的结构
      list.forEach((item) => {
        const { id, name, parentId } = item;
        map.set(item.id, { id, name, parentId, children: [] });
      });

      // 遍历每个节点，将其添加在对应的父节点的children列表中
      list.forEach((item) => {
        // 根节点不需要处理
        if (item.parentId === null) {
          return;
        }

        // 如果存在父亲节点
        const pNode = map.get(item.parentId);

        // 父节点不在当前list中，不处理
        if (!pNode) {
          return;
        }

        // 父节点存在，则将其子节点添加到父节点的children列表中
        pNode.children.push(map.get(item.id)!);
      });

      // 返回父节点
      return map.get(rootId);
    };

    const list: ListItem[] = [
      { id: 1, name: 'child1', parentId: 0 },
      { id: 2, name: 'child2', parentId: 0 },
      { id: 6, name: 'child2_1', parentId: 2 },
      { id: 0, name: 'root', parentId: null },
      { id: 5, name: 'child1_2', parentId: 1 },
      { id: 4, name: 'child1_1', parentId: 1 },
      { id: 3, name: 'child3', parentId: 0 },
      { id: 7, name: 'child3_1', parentId: 3 },
    ];

    console.log(listToTree(list));
  };

  // test();
}

// 树转列表
{
  const test = () => {
    const treeToList = (tree: Tree) => {
      const res: ListItem[] = [];
      if (!tree) {
        return [];
      }

      // 存入根节点信息
      const { id, name, parentId } = tree;
      res.push({ id, name, parentId });

      if (tree.children.length) {
        tree.children.forEach((item) => {
          res.push(...treeToList(item));
        });
      }

      return res;
    };
    const tree: Tree = {
      id: 0,
      name: 'root',
      parentId: null,
      children: [
        {
          id: 1,
          name: 'child1',
          parentId: 0,
          children: [
            {
              id: 5,
              name: 'child1_2',
              parentId: 1,
              children: [],
            },
            {
              id: 4,
              name: 'child1_1',
              parentId: 1,
              children: [],
            },
          ],
        },
        {
          id: 7,
          name: 'child3',
          parentId: 0,
          children: [
            {
              id: 8,
              name: 'child3_1',
              parentId: 3,
              children: [],
            },
          ],
        },
        {
          id: 2,
          name: 'child2',
          parentId: 0,
          children: [
            {
              id: 6,
              name: 'child2_1',
              parentId: 2,
              children: [],
            },
          ],
        },
      ],
    };

    console.log(treeToList(tree));
  };

  // test();
}

// 判断数组的方式
{
  const test = () => {
    const list: number[] = [1, 2, 3];

    // 使用Object原型上的toString方法进行判断
    console.log(Object.prototype.toString.call(list).slice(8, -1));
    // 原生方法
    console.log(Array.isArray(list));
    // 借助原型链进行判断
    console.log(Object.getPrototypeOf(list) === Array.prototype);
    // 借助instanceof  (原理也是基于原型链进行判断)
    console.log(list instanceof Array);
  };

  // test();
}

// this指向问题
{
  // 1、当做函数直接调用，this指向全局对象(window或者nodejs中的global对象)
  // 2、当作对象的方法进行调用，指向调用当前方法的对象
  // 3、当做构造器模型，指向新创建的实例对象
  // 4、使用call、apply、bind进行调用时，指向函数中传入的上下文对象。
}

// 关于箭头函数简写形式(只有一条语句的时候可以在语句前添加void)
// 箭头函数中的this指向在它定义时以及确定了，之后不会改变了
{
  const test = () => {
    const simplify1 = (a: number) => void (a + 1);
    const simplify2 = (a: number) => (a + 1);

    console.log(simplify1(2));
    console.log(simplify2(2));
  };
  // test();
}

// new 操作符都干了哪些事情
{
  const test = () => {
    function myNew() {
      // 1、创建一个对象
      // 2、将这个对象的原型对象设置为函数的prototype对象
      // 3、将当前的this指向新创建的实例对象
      // 4、返回这个对象

    }

    myNew();
  };
  // test();
}

// 数组的splice方法总结
// 返回包含了删除的元素的数组
{
  const test = () => {
    const list: number[] = [1, 2, 3, 4, 5];

    // 传入一个数值，代表开始索引，后面的都会被删除，负数就是倒着数，超过-length默认是0
    const list1 = [...list];
    console.log(list1.splice(2), list1);
    const list2 = [...list];
    console.log(list2.splice(-5), list2);
    const list3 = [...list];
    console.log(list3.splice(-6), list3);

    // 传入两个数，第一个代表start，第二个代表要删除的元素个数
    const list4 = [...list];
    console.log(list4.splice(1, 3), list4);
    const list5 = [...list];
    console.log(list5.splice(2, 1), list5);
    const list6 = [...list];
    console.log(list6.splice(3, Infinity), list6);

    // 传入三个及三个以上的参数，代表从start开始删除n个数字 然后添加多少个元素
    const list7 = [...list];
    console.log(list7.splice(1, 2, 8, 9), list7);
  };

  // test();
}

// JS中可迭代对象包括：
//   1、Array,String,TypedArray,Map,Set,NodeList,arguments对象，
//   2、由生成器函数生成的生成器，
//   3、以及用户自定义的可迭代对象

// JS中for-in和for-of的区别
// 遍历数组的区别
{
  const test = () => {
    const list: number[] = [1, 2, 3, 4, 5];
    Object.getPrototypeOf(list).name = 'hanshu';

    console.log('for-in遍历会返回所有可枚举属性,包括非整数名称和被继承的属性');
    for (const index in list) {
      console.log(index);
    }
    console.log('for-of遍历值序列,不会遍历继承属性');
    for (const item of list) {
      console.log(item);
    }
  };

  // test();
}

// JS中for-in和for-of的区别
// 遍历对象的区别
{
  const test = () => {
    const a: {
      [key: string]: any
      [Symbol.iterator]: () => { next(): { value: any, done: boolean } }
    } = {
      a: 1, b: 2,
      [Symbol.iterator]() {
        let index = 0;
        const keys = Object.keys(this);
        return {
          next() {
            return index < keys.length
              ? { value: this[keys[index++]], done: false }
              : { value: null, done: true };
          },
        };
      },
    };

    Object.getPrototypeOf(a).name = 'jicheng';

    console.log('for-in遍历对象的可枚举字符串属性,包括继承属性');
    for (const key in a) {
      console.log(key);
    }

    console.log('for-of遍历对象的值序列,不包括继承属性,因为对象本身没有值序列,所以没有属性');
    for (const key of a) {
      console.log(key);
    }
    // 遍历对象自身属性的基本方法,但是需要加一层判断
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        console.log(a[key]);
      }
    }

    // 最好的遍历对象的属性的方法是使用Object.keys()或者Object.getOwnPropertyNames()函数

    Object.keys(a).forEach(innerKey => console.log(a[innerKey]));
    Object.getOwnPropertyNames(a).forEach(innerKey => console.log(a[innerKey]));
  };

  // test();
}

// 遍历数组的方法都有哪些
{
  const test = () => {
    const list: number[] = [1, 2, 3, 4, 5];

    console.log('while循环');
    console.log('do-while');
    console.log('for');
    console.log('for-in');
    for (const index in list) {
      console.log(list[index]);
    }

    console.log('for-of');
    for (const num of list) {
      console.log(num);
    }

    console.log('forEach遍历:不改变原数组,但是可以对原数组中引用类型数据内部的属性值进行修改,任何时候都返回undefined');
    list.forEach(num => console.log(num));

    console.log('map遍历,返回新数组:不会改变原数组,有返回值,可以链式调用');
    list.map(num => console.log(num));

    console.log('filter遍历:不改变原始数组,返回符合条件的元素组成的数组,可链式调用');
    console.log(list.filter(num => num < 3));

    console.log('some遍历:不改变原始数组,只要有一个true,便终止返回true');
    console.log(list.some(num => num > 6));

    console.log('every遍历:不改变原数组,只要有一个是false,便终止返回false');
    console.log(list.every(num => num < 6));

    console.log('find遍历:找到第一个符合条件的元素,便终止返回其元素,否则返回undefined');
    console.log(list.find(num => num === 3));

    console.log('findIndex遍历:找到第一个符合条件的元素,便终止返回其索引,-1');
    console.log(list.findIndex(num => num === 3));

    console.log('reduce遍历求和:不改变原数组,对数组正序进行操作');
    console.log(list.reduce((total, cur) => total + cur));

    console.log('reduceRight遍历求和:不改变原数组,对数组逆序进行操作');
    console.log(list.reduceRight((total, cur) => total + cur));
  };

  // test();
}

// 测试forEach方法返回值
{
  const test = () => {
    const list: any[] = [1, 2, { a: 3, b: 4 }];

    console.log('普通类型,不改变原数组');
    console.log(list.forEach((item) => {
      if (!(item instanceof Object)) {
        item = 1;
      }
    }));

    console.log('引用类型数据改变内部值,可以改变原数组,返回undefined');
    console.log(list.forEach((item) => {
      if (item instanceof Object) {
        item.a = 5;
      }
    }));

    console.log(list);

    console.log('引用类型数据改变对象引用,无法改变原数组,返回undefined');
    console.log(list.forEach((item) => {
      if (item instanceof Object) {
        item = { c: 1, d: 2 };
      }
    }));
    console.log(list);
  };

  // test();
}

// 作用域与作用域链
{
  // 1、全局作用域，容易污染全局命名空间
  // 2、函数作用域，函数内部声明的变量
  // 3、块级作用域，代码块({}中的代码就算是一个代码块)
  // 作用域链，首先在自身作用域找，找不到就一直向父级作用域找，知道找到window对象
}

// 异步编程相关
{
  const test = () => {
    console.log('0');

    new Promise<void>((resolve) => {
      console.log(1);
      resolve();
      console.log(2);
    }).then(() => {
      console.log(3);
    });

    setTimeout(() => {
      console.log(4);
    }, 0);

    console.log(5);
  };

  // test();
  // 0 1 3 5 3 4
}

// async函数永远返回promise对象
{
  const test = () => {
    (async (num: number) => {
      return num;
    })(3).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err, 'err');
    });
  };
  // test();
}

// 1、async永远返回的是一个promise对象
// 2、所以在最外层不能使用await去获取其值，只能使用then去处理结果
// 3、如果直接执行async函数，会立即执行并返回一个promise，不会阻塞后面的代码，和普通返回promise的函数没有区别
{
  const test = () => {
    console.log((async () => { })());
  };

  // test();
}

// 关乎Promise.resolve()静态方法(注意：原型对象上的方法，其实是每个实例可以访问的方法（实例方法）)
{
  const test = () => {
    return Promise.resolve(1);
    // 等价于
    // return new Promise((resolve) => {
    //   resolve(1);
    // });
  };
}

// 关于ES6新特性
{
  const test = () => {
    // 1、箭头函数
    // 2、解构赋值
    // 3、模板字符串
    // 4、async/await语法糖
    // 5、symbol、bigInt数据结构
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = () => {
      // const s1 = Symbol(1);
      // const s2 = Symbol(2);
      // console.log(s1 === s2);  // false,每次调用都返回唯一值，传入的参数只是描述
    };
    // test();

    console.log(Symbol.for('1') === Symbol.for('1'));
    // 6、let、const块级作用域
    // 7、es6模块化
    // 8、Map、Set数据结构
    // 9、全局Proxy代理对象
    // 10、引入Class类的面向对象编程思想
    // 11、定义函数的时候可以使用默认参数
    // 12、 展开运算符
    // 13、for-of循环
    // 14\ promise
  };

  // test();
}

// 匿名函数
// 1、可以用于立即执行函数，防止污染全局命名空间
// 2、可以作为只使用一次的回调函数，代码具有更好的自闭性和维护性，不需要跳跃阅读代码
// 3、适用于函数式编程或者lodash回调
{
  const test = () => {
    (() => {
      console.log(123);
    })();
  };

  // test();
}

// 函数柯里化
// 1、主要是将具有多个参数的函数，分解为多个函数。
// 2、当被进行串联调用，会将所有参数合并在一起执行函数，
// 3、编写函数式编程的代码
{
  // 实现一个柯里化函数求和
  // add(3, 5)   // 参数不够，返回函数
  // add(3, 5)(4)   // 参数够了，返回结果

  const test = () => {
    const curry = (fn: Function) => {
      // 如果传入的函数参数长度为0，不需要柯里化，直接当前函数
      const total = fn.length;
      if (!total) {
        return fn;
      }

      return function curried(...args: number[]) {
        return args.length >= total
          ? fn(...args)
          : (...moreArgs: number[]) => curried.apply(null, [...args, ...moreArgs]);
      };
    };

    const add = (a: number, b: number, c: number) => a + b + c;

    const curryAdd = curry(add);

    console.log(curryAdd(3, 4));
    console.log(curryAdd(3, 4)(5));
    console.log(curryAdd(1)(2)(3));
  };

  // test();
}

// 设计模式
// 手写单例模式
{
  const test = () => {
    // 懒汉式： 类加载时候不创建，需要获取单例实例的时候动态判断是否需要创建单例实例
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class singleInstance1 {
      private static _instance: singleInstance1;
      constructor() {
        if (!singleInstance1._instance) {
          singleInstance1._instance = new singleInstance1();
        }
        return singleInstance1._instance;
      }
    }

    // 恶汉式: 一开始就创建好，不管需不要拿单例实例对象，我首创建好
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class singleInstance2 {
      private static _instance: singleInstance2 = new singleInstance2();

      constructor() {
        return singleInstance2._instance;
      }
    }
  };
}

// 设计模式
// 手写观察者模式
{
  const test = () => {
    // 当数据变化的时候需要通知更新的数据
    const queueObservers = new Set<Function>();
    const observe = (fn: Function) => queueObservers.add(fn);

    const observable = (obj: { [key: string]: string }) => new Proxy(obj, {
      set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        // 通知
        queueObservers.forEach(fn => fn());
        return result;
      },
    });

    const obj = observable({
      name: 'xbai',
    });

    observe(() => console.log('name变化了'));

    obj.name = 'af';
    obj.name = 'af1';
  };

  // test();
}

// 设计模式
// 手写发布订阅模式
{
  const test = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class PubSubModel {
      // 事件中心
      private static eventList: Map<string, ((data: any) => any)[]> = new Map();

      sub(eventName: string, fn: (data: any) => any) {
        if (!PubSubModel.eventList.has(eventName)) {
          PubSubModel.eventList.set(eventName, []);
        }

        PubSubModel.eventList.get(eventName)?.push(fn);
      }

      // 取消订阅，如果没有传执行取消订阅的函数，则取消所有订阅函数
      unsub(eventName: string, fn?: (data: any) => any) {
        if (fn) {
          PubSubModel.eventList.get(eventName)?.filter(subFn => subFn !== fn);
          return;
        }
        PubSubModel.eventList.set(eventName, []);
      }

      pub(eventName: string, data: any) {
        PubSubModel.eventList.get(eventName)?.forEach(fn => void fn(data));
      }
    }
  };

  // test();
}

// 观察者vs发布订阅模式区别
{
  // 1、从表面来看
  //  观察者模式有观察者，被观察者
  //  发布订阅模式中，除了发布者和订阅者两个角色，还有一个经纪人
  // 2、从更深层次来看
  //  观察者和被观察者，是松耦合关系
  //  发布者和订阅者，则完全不存在耦合
  // 3、从使用层面来讲
  //  观察者模式，是被观察者发生变化的时候，默认自动通知所有观察者更新
  //  发布订阅模式，主要是当事件发布的时候，通知所有订阅了该事件的订阅者（类似于一些发送消息的中间件）
}

// 关于Map的遍历
{
  const test = () => {
    const myMap = new Map([
      [0, 'zero'],
      [1, 'one'],
    ]);
    // myMap.set(0, 'zero');
    // myMap.set(1, 'one');
    const res: string[] = [];

    for (const entry of myMap) {
      console.log(entry);
      res.push(entry[1]);
    }

    console.log(res);

    console.log(typeof myMap.values());
    console.log(myMap.values());
    console.log(Array.from(myMap.values()));

    // for (const [key, value] of myMap) {
    //   console.log(`${key} = ${value}`);
    // }
  };

  // test();
}

// 关于set的遍历
{
  const test = () => {
    const mySet = new Set([1, 2, 3]);

    for (const num of mySet) {
      console.log(num);
    }

    console.log(typeof mySet.keys());
    console.log(mySet.keys());
    console.log(mySet.values());
  };

  // test();
}

// pdd二面面试题
// 自定义hooks,写一个自定义的倒计时Hooks，传入剩余的秒数，hooks实时输出的时分秒，随着时间的流逝，输出的剩余时分秒会自动倒计时更新；到时间后，自动执行一个endCallback,如果传入的leftSeconds<=0，不执行endCallback
{
  const test = () => {
    const formatTime = (time: number) => ({
      year: 1, month: 1, day: 1, hour: 1, minute: 1, second: 1, originLeftSeconds: time,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const useTime = (leftSeconds: number, endCallback: Function) => {
      if (leftSeconds <= 0) {
        return;
      }

      const [year, setYear] = useState(0);
      const [month, setMonth] = useState(0);
      const [day, setDay] = useState(0);
      const [hour, setHour] = useState(0);
      const [minute, setMinute] = useState(0);
      const [second, setSecond] = useState(0);

      const ref = useRef(leftSeconds);

      useEffect(() => {
        const timer = setInterval(() => {
          // 每次判断怒当前倒计时是否结束，结束，则执行endCallback,关闭间隔定时器,直接返回
          if (ref.current === 0) {
            clearInterval(timer);
            endCallback();
            return;
          }

          // 更新倒计时
          const { year, month, day, hour, minute, second } = formatTime(ref.current);
          setYear(year);
          setMonth(month);
          setDay(day);
          setHour(hour);
          setMinute(minute);
          setSecond(second);

          // 更新倒计时
          ref.current--;
        }, 1000);

        return () => {
          clearInterval(timer);
        };
      }, []);

      return { year, month, day, hour, minute, second };
    };
  };

  // test();
}

// pdd二面
// promises数组，函数按照顺序执行这些promise，函数执行结束后返回一个Promise，最终resolve为所有Promise结果的数组

// retry： 每一个Promise如果执行失败后，各自可以重试的最大次数

// timeout：每一个promise各自执行的超时时间不超过timeout毫秒，涵盖该Promise重试花费的时间

// 每个promise发生timeout超时后，该promise如果执行失败也不重试

// 执行失败的promise在最终的结果数组中为其对应的error，timeout超时的error为Error('Timeout')

{
  const test = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getResult = (promises: (() => Promise<any>)[], retry: number, timeout: number) => {
      return new Promise((resolve) => {
        // 存放结果数组
        const res: any[] = [];

        // 启动任务函数
        function start(promise: () => Promise<any>) {
          // 当前任务执行次数（重试次数 = 总执行次数 - 1）
          let count = 0;
          // 任务执行开始时间
          const startTime = Date.now();
          function restart(promise: () => Promise<any>) {
            count++;
            promise().then((result) => {
              res.push(result);
            }).catch((err) => {
              if (Date.now() - startTime > timeout) {
                res.push(Error('Timeout'));
              }
              //  如果当前已经重试了retry次数
              else if (count - 1 >= retry) {
                res.push(err);
              }
              // 满足时间限制和retry条件，则重试
              else {
                restart(promise);
              }
            });
          }
          // 开启一个异步任务
          restart(promise);
        }

        for (const promise of promises) {
          start(promise);
        }

        // 所有异步任务按照顺序执行完成后，resolve结果数组
        resolve(res);
      });
    };
  };
}

// 字符串不可修改
{
  const test = () => {
    const s1 = '123';
    s1[0] = '4';
    console.log(s1);
  };

  // test();
}

// 爬楼梯， 1  1   2  2   3 3
{
  const test = () => {
    const climb = (n: number) => {
      let p = 0;
      let q = 0;
      let r = 1;
      for (let i = 1; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
      }

      return r;
    };

    climb(2);
  };
  // test();
}

// ts函数类型申明
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare function pick<T extends Record<string, unknown>>(target: T, ...keys: (keyof T)[]): unknown;

// 华为面试第一题
{
  //     a
  // b       c
  //    d  f
  // e

  // 前序:  中左右     abdecf
  // 中序:  左中右     bedafc
  // 后序:   左右中    edbfca

  function levelOrder(root: object) {
    if (!root) {
      return [];
    }

    const result = [];
    const queue = [];

    queue.push(root);

    while (queue.length) {
      const node = queue.shift();
      result.push(root);

      if (node.left) {
        queue.push(root.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}

// 华为一面第三题
{
  const test = () => {
    {
      function quickSort(nums: number[]): number[] {
        if (nums.length <= 1) {
          return nums;
        }
        // const pivot = partrition(nums, start, end);
        // quickSort(nums, start, pivot - 1);
        // quickSort(nums, pivot, end);

        const pivot = nums[nums.length - 1];

        const left = [];
        const right = [];
        const equal = [];
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] < pivot) {
            left.push(nums[i]);
          }
          else if (nums[i] > pivot) {
            right.push(nums[i]);
          }
          else {
            equal.push(nums[i]);
          }
        }

        return [...quickSort(left), ...equal, ...quickSort(right)];
      }

      const arr = [10, 2, 7, 5, 3, 8, 6, 4, 9];

      console.log(quickSort(arr));
    }
  };

  // test();
}

// 华为二面链表排序

{
  // 链表节点结构定义
  type Node = {
    val: number
    next: Node | null
  };

  const test = () => {
    function ListNode(val: number, next: Node | null) {
      this.val = val;
      this.next = next;
    }

    function sort(head1: Node, head2: Node) {
      const dummyHead = ListNode(0, null);
      let temp = dummyHead;
      let temp1 = head1;
      let temp2 = head2;

      while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
          temp.next = temp1;
          temp1 = temp1.next;
        }
        else {
          temp.next = temp2;
          temp2 = temp2.next;
        }

        temp = temp.next;
      }

      if (temp1 !== null) {
        temp.next = temp1;
      }
      else {
        temp.next = temp2;
      }

      return dummyHead.next;
    }

    const sortList = (head: Node | null, tail: Node | null) => {
      if (head === null) {
        return head;
      }

      if (head.next === tail) {
        head.next = null;
        return head;
      }

      let slow = head;
      let fast = head;

      while (fast != tail) {
        slow = slow.next;
        fast = fast.next;
        if (fast != tail) {
          fast = fast.next;
        }
      }

      const mid = slow;
      return sort(sortList(head, mid), sortList(mid, tail));
    };

    const getList = function (head: Node | null) {
      return sortList(head, null);
    };

    const printList = (head: Node | null) => {
      let current = head;
      const values = [];
      while (current !== null) {
        values.push(current.val);
        current = current.next;
      }

      console.log(values.join('-->'));
    };

    const generateList = (arr: number[]) => {
      const dummyHead = ListNode(0, null);

      let current = dummyHead;

      for (const num of arr) {
        current.next = ListNode(num, null);
        current = current.next;
      }

      return dummyHead.next;
    };

    const testData = [
      [4, 2, 1, 3],
      [-1, 5, 3, 4, 0],
      [1],
      [],
    ];

    for (const data of testData) {
      const head = generateList(data);
      printList(head);
      const sortedList = getList(head);
      printList(sortedList);
    }
  };
  // test();
}

// 虾皮 curryAdd   关于普通函数访问不到当前普通函数原型对象身上的属性和方法
{
  const test = () => {
    function curryAdd(...args: number[]) {
      accumulator.prototype.total = args.reduce((acc, cur) => cur + acc, 0);

      function accumulator(...args2: number[]) {
        if (args2.length > 0) {
          accumulator.prototype.total += args2.reduce((acc, cur) => cur + acc, 0);
        }
        return accumulator;
      };

      accumulator.prototype.count = () => accumulator.prototype.total;
      return accumulator;
    }

    console.log(curryAdd(1)(2)(3).prototype.count());
    console.log(curryAdd(1)(2)(3)(4).prototype.count());
    console.log(curryAdd(1)(2)(3)(4, 5).prototype.count());
  };

  // 测试函数
  // test();
}

// 第二种写法
{
  const test = () => {
    function curryAdd(...args: number[]) {
      let total = args.reduce((acc, cur) => cur + acc, 0);

      function accumulator(...args2: number[]) {
        if (args2.length > 0) {
          total += args2.reduce((acc, cur) => cur + acc, 0);
        }
        return accumulator;
      };

      accumulator.count = () => total;
      return accumulator;
    }

    console.log(curryAdd(1)(2)(3).count());
    console.log(curryAdd(1)(2)(3)(4).count());
    console.log(curryAdd(1)(2)(3)(4, 5).count());
  };

  // 测试函数
  // test();
}

// 第三种写法
{
  const test = () => {
    function curryAdd(...args: number[]) {
      accumulator.__proto__.total = args.reduce((acc, cur) => cur + acc, 0);

      function accumulator(...args2: number[]) {
        if (args2.length > 0) {
          accumulator.__proto__.total += args2.reduce((acc, cur) => cur + acc, 0);
        }
        return accumulator;
      };

      accumulator.__proto__.count = () => accumulator.total;
      return accumulator;
    }
    console.log(curryAdd(1)(2)(3).count());
    console.log(curryAdd(1)(2)(3)(4).count());
    console.log(curryAdd(1)(2)(3)(4, 5).count());
  };

  // 测试函数
  // test();
}

// 关于函数的原型
// 1、函数对象跟其他对象不一样
// 2、同时拥有__proto__属性和prototype属性
// 3、__proto__属性指向Function构造函数的prototype一直到原型链的末端
// 4、prototype属性主要是为了存放其作为构造函数时，所有实例对象共享的属性和方法，也能有一条完整的链路到原型链的末端
//   4.1、当使用new去调用函数的时候，返回的新对象的__proto__属性会指向函数对象的prototype

{
  const test = () => {
    function PrototypeChain(name?: string, age?: string) {
      this.name = name;
      this.age = age;
    }

    // 第一种为普通函数添加方法
    // 第一种方式： 普通函数本身就是对象，与对象身上添加属性一样
    // 第二种方式：普通函数本省就是对象，可以在其原型链上添加属性
    PrototypeChain.ownMethod1 = () => void console.log('ownMethod1');
    PrototypeChain.__proto__.ownMethod2 = () => void console.log('ownMethod2');

    PrototypeChain.ownMethod1();
    PrototypeChain.ownMethod2();
    // 第二种为实例对象添加共享方法
    PrototypeChain.prototype.instanceMethod = function () {
      console.log('instanceMethod1', this.name, this.age);
    };

    const instacne1 = new PrototypeChain('xbai1', 24);
    const instacne2 = new PrototypeChain('xbai2', 20);
    instacne1.instanceMethod();
    instacne2.instanceMethod();

    // 判断走prototype链的时候能不能获取到__proto__链上的属性
    // 结果： 不能拿到，找不到，会报错
    // instacne1.ownMethod1();
    // instacne1.ownMethod2();
    // instacne2.ownMethod1();
    // instacne2.ownMethod2();

    // 判断prototype链的顶端是不是跟__proto__链的顶端重合
    console.log(PrototypeChain.prototype);
    console.log(PrototypeChain.prototype.__proto__ === PrototypeChain.__proto__.__proto__);
  };

  // test();
}

// 关于node环境中全局this指向问题
// 如果是在函数中，this指向global对象，如果采用严格模式，将指向undefined
{
  const test = () => {
    console.log(this); // {}
    console.log(module.exports); // {}
    console.log(this === module.exports); // true
  };

  // test();
}

{
  // 函数中使用this,但是没有使用new进行调用会污染全局命名作用域
  // 具体对照同样的js代码可以执行，但是ts代码不能执行 是为什么？
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = () => {
      function poiont() {
        console.log(this, 'this');
        // this.x = '111';
        // this.y = '222';
        // return this.x + this.y;
      }
      const pit = poiont();
      // console.log(x); // 111
      // console.log(y); // 222
      // console.log(pit); // 111222
      // const pit2 = new poiont();
      // console.log(pit2); // {x:'111',y:'222'}
      // console.log(this === global);
      // console.log(global);
    };

    // test();
  }
}
