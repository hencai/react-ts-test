// const test<> = (a: t) => a

// test(123)

// var num =2;
// function a_func() {
//   let num = 3;
//   console.log(this.num);
// };

// function b() {
//   let num = 3;
//   a_func.call(this)
// };

// var obj = {
//   num: 1,
//   func: b.bind(this)
// }

// obj.func()

Function.prototype.fn1 = () => console.log(1);
Object.prototype.fn2 = () => console.log(2);

const fn = new Function();
// fn.fn1()
// fn.fn2()

// 写一个循环，每隔1s打印123456f

for (var i = 0; i < 6; i++) {
  ((j) => {
    setTimeout(() => {
      // console.log(j);
    }, j * 1000);
  })(i);
}

for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    // console.log(i);
  }, i * 1000);
}

for (var i = 0; i < 6; i++) {
  let j = i;
  setTimeout(() => {
    // console.log(j);
  }, j * 1000);
}

for (var i = 0; i < 6; i++) {
  setTimeout(
    (j) => {
      // console.log(j);
    },
    i * 1000,
    i,
  );
}

// 自己实现第一版
const fetchData = async (api, param) =>
  new Promise((resolve, reject) => {
    console.log('请求接口');
    // const data = await axios.get(api, param);

    const data = { code: 200, reason: '' };
    if (data.code === 200) {
      resolve(data);
    }
    else {
      reject(data.reason);
    }
  });

const poll = (api, param) => {
  let data;
  let timer = setTimeout(async () => {
    try {
      data = await fetchData(api, param);
    }
    catch (e) {
      data = null;
      console.log('e');
    }
    if (data && data.code === 200) {
      console.log('请求成功');
      timer = null;
      return data;
    }
    poll();
  }, 1000);
};

// poll('', '')

/**
 * 继承相关
 */

{
  {
    // 原型链继承
    /**
     * 1. 范围: 子类构造函数 & 父类构造函数 & 父类原型对象
     * 2. 缺点: 单一继承
     */
    function Father() {
      this.father = 'Father';
    }

    function Child() {
      this.child = 'Child';
    }

    Child.prototype = new Father();
    const child = new Child();
    child.constructor = Child;
    console.log(child.constructor);
  }

  {
    // 构造函数继承
    /**
     * 1. 可以多继承
     * 2. 范围: 子类构造函数 & 父类构造函数
     * 3. 缺点: 无法获取父类原型对象上的所有 & 子类实例修改父类构造函数中的属性,其余子类实例获取的父类构造函数所有也改变
     */
    function Father() {
      this.father = 'Father';
    }

    Father.prototype.sayFather = () => {
      console.log('我是父亲');
    };

    function Child() {
      Father.call(this);
      this.child = 'Child';
    }

    const child = new Child();
    console.log(child.constructor);
    console.log(child.name);
  }

  {
    // 组合继承
    /**
     * 1. 解决了无法获取父类原型对象所有的问题
     * 2. 解决了子类实例修改父类构造函数中的属性,其余子类实例获取的父类构造函数所有也改变
     * 3. 但是父类构造函数调用了两次,导致子类原型上多一份父类构造函数所有数据
     */
    function Father() {
      this.father = 'Father';
    }

    function Child() {
      Father.call(this, ...arguments);
      this.child = 'Child';
    }

    Child.prototype = new Father();

    const child = new Child(1, 2, 3);
  }

  {
    // 寄生继承
    /**
     * 1. 解决重复调用父类构造函数的问题
     * 2. 只使用Object.create()来创建父类的原型对象,而不是调用父类构造函数
     */
    function Father() {
      this.father = 'Father';
    }

    function Child() {
      Father.call(this);
      this.child = 'Child';
    }

    Child.prototype = Object.create(Father.prototype, {
      constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });

    const child = new Child(1, 2, 3);
  }

  {
    // es6 类继承
    class Father {
      constructor() {
        this.name = 'father';
        console.log('调用父类构造器函数', arguments);
      }
    }

    class Child extends Father {
      constructor() {
        super(...arguments);
        console.log('调用子类构造器', arguments);
        this.name = 'child';
      }
    }

    const child = new Child(1, 2, 3);
  }
}

console.log('笔试..........................');

{
  function maxScore(m, counts) {
    const availableCounts = counts.filter(count => count > 0);

    const distinctCardCount = availableCounts.length;

    return Math.min(
      distinctCardCount,
      availableCounts.reduce((sum, count) => sum + 1, 0),
    );
  }

  const m = 5;
  const numbers = [3, 2, 1, 0, 1];
  const result = maxScore(m, numbers);
  // console.log(result);
}

const testFunc = (a) => {
  a = 2;
};
