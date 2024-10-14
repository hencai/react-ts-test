{
  const test = () => {
    Function.prototype.fn1 = () => console.log(1);
    Object.prototype.fn2 = () => console.log(2);

    const fn = new Function();
    fn.fn1();
    fn.fn2();
  };
}

// 写一个循环，每隔1s打印123456f
// 第一种
{
  const test = () => {
    for (var i = 0; i < 6; i++) {
      ((j) => {
        setTimeout(() => {
          console.log(j);
        }, j * 1000);
      })(i);
    }
  };
}

// 第二种
{
  const test = () => {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  };
}

// 第三周
{
  const test = () => {
    for (var i = 0; i < 6; i++) {
      const j = i;
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    }
  };
}

{
  const test = () => {
    for (var i = 0; i < 6; i++) {
      setTimeout(
        (j) => {
          console.log(j);
        },
        i * 1000,
        i,
      );
    }
  };
}

// 自己实现第一版
{
  const test = () => {
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

    poll('', '');
  };
}

/**
   * 继承相关
   */

{
  // 原型链继承
  /**
     * 1. 范围: 子类构造函数 & 父类构造函数 & 父类原型对象
     * 2. 缺点: 单一继承
     */
  {
    const test = () => {
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
    };
  }

  // 构造函数继承
  /**
     * 1. 可以多继承
     * 2. 范围: 子类构造函数 & 父类构造函数
     * 3. 缺点: 无法获取父类原型对象上的所有 & 子类实例修改父类构造函数中的属性,其余子类实例获取的父类构造函数所有也改变
     */
  {
    const test = () => {
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
    };
  }

  // 组合继承
  /**
     * 1. 解决了无法获取父类原型对象所有的问题
     * 2. 解决了子类实例修改父类构造函数中的属性,其余子类实例获取的父类构造函数所有也改变
     * 3. 但是父类构造函数调用了两次,导致子类原型上多一份父类构造函数所有数据
     */
  {
    const test = () => {
      function Father() {
        this.father = 'Father';
      }

      function Child() {
        Father.call(this, ...arguments);
        this.child = 'Child';
      }

      Child.prototype = new Father();

      const child = new Child(1, 2, 3);
    };
  }

  // 寄生继承
  /**
     * 1. 解决重复调用父类构造函数的问题
     * 2. 只使用Object.create()来创建父类的原型对象,而不是调用父类构造函数
     */
  {
    const test = () => {
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
    };
  }

  // es6 类继承
  {
    const test = () => {
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
    };
  }
}

// 笔试题
{
  const test = () => {
    const count = (n, m, directions) => {
      //   const TIME = Math.pow(10, 8);
      const TIME = 100000;
      const directionMap = {
        L: [0, -1],
        R: [0, 1],
        U: [-1, 0],
        D: [1, 0],
      };

      let grid = Array.from({ length: n }, () => Array(m).fill(1));

      let seenStates = new Map();

      for (let t = 0; t < TIME; t++) {
        let stateString = grid.flat().join(',');

        if (seenStates.has(stateString)) {
          break;
        }

        seenStates.set(stateString, t);

        let newGrid = Array.from({ length: n }, () => Array(m).fill(0));

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < m; j++) {
            let robots = grid[i][j];
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
    const [n, m] = [2, 5];
    const directions = [
      ['L', 'R', 'R', 'L', 'R'],
      ['U', 'U', 'L', 'L', 'R'],
    ];

    console.log(count(n, m, directions));
  };
}

// 力扣题
{
  const test = () => {
    let totalSum = inputs[1].reduce((sum, cur) => sum + cur, 0);

    let minCost = Infinity;

    let prefixSums = [0];
    for (let i = 0; i < inputs[0][0]; i++) {
      prefixSums.push(prefixSums[i] + inputs[1][i]);
    }

    for (let i = 0; i < inputs[0][0]; i++) {
      let leftSum = prefixSums[i];
      let rightSum = totalSum - leftSum;
      let cost = leftSum * rightSum;
      minCost = Math.min(minCost, cost);
    }
  };
}

// 笔试题
{
  const test = () => {
    function calculateDistance(city1, city2) {
      return Math.sqrt(Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2));
    }

    let maxMinDistance = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; i < n; j++) {
        const distance = calculateDistance(cities[i], cities[j]);
        maxMinDistance = Math.max(maxMinDistance, distance);
      }
    }

    console.log(Math.ceil(maxMinDistance));
  };
}

// 笔试题
{
  const test = () => {
    let n = inputs[0][0];
    let coordinates = [];

    const distance = (a, b) => Math.sqrt((a[0] - a[0]) ** 2 + (a[1] - b[1]) ** 2);
    const edges = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        edges.push([distance(coordinates[i], coordinates[j]), i, j]);
      }
    }

    edges.sort((a, b) => a[0] - b[0]);

    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);

    const find = (x) => {
      if (parent[x] != x) {
        parent[x] = find(parent[x]);
      }

      return parent[x];
    };

    const union = (x, y) => {
      const rootX = find(x);
      const rootY = find(y);
      if (rootX !== rootY) {
        if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
        else if (rank[rootX] < rank[rootY]) parent[rootX] = rootX;
        else {
          parent[rootY] = rootX;
          rank[rootX]++;
        }
      }
    };

    let maxEdge = 0;
    let edgesUsed = 0;
    for (const [dist, u, v] of edges) {
      if (find(u) !== find((v))) {
        union(u, v);
        maxEdge = dist;
        edgesUsed++;
        if (edgesUsed === n - 1) break;
      }
    }

    console.log(Math.ceil(maxEdge));
  };
}

{
  const test = () => {
    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    };
  };
}

{
  const test = () => {
    const findLastSingleChar = (str) => {
      const charMap = {};

      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
          charMap[char]++;
        }
        else {
          charMap[char] = 1;
        }
      }

      for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        if (charMap[char] === 1) {
          return char;
        }
      }

      return '';
    };

    console.log(findLastSingleChar('ababa'));
  };
}

{
  const test = () => {
    function countOnes(x) {
      return x.toString(2).split('1').length - 1;
    }

    function findNextWithSameOnes(x) {
      let fx = countOnes(x);
      let y = x + 1;
      while (true) {
        if (countOnes(y) === fx) {
          return y;
        }
        y++;
      }
    }

    function longestSubsequence(a) {
      let maxLength = 0;
      let bestSequence = [];

      let indices = new Map();

      a.sort((x, y) => x - y);

      for (let i = 0; i < a.length; i++) {
        indices.set(a[i], findNextWithSameOnes(a[i]));
      }

      for (let i = 0; i < a.length; i++) {
        let currentSequence = [a[i]];
        let current = a[i];

        while (indices.has(current)) {
          let next = indices.get(current);
          if (a.includes(next)) {
            currentSequence.push(next);
            current = next;
          }
          else {
            break;
          }
        }

        if (currentSequence.length > maxLength) {
          maxLength = currentSequence.length;
          bestSequence = currentSequence;
        }
      }

      return bestSequence.length;
    }

    const list = [1, 4, 2, 5, 3];
    console.log(longestSubsequence(list));
  };
}

{
  const test = () => {
    let x = 20,
      y = 10;

    function add(a, b) {
      return a + b;
    }

    let result = add(x, y);
    console.log('result ' + result); // "result 60"

    function add(a) {
      return a + 40;
    }
    let result1 = add(x);
    console.log('result1 ' + result1); // "result1 60"
    console.log(add);
  };
}

{
  const test = () => {
    let name = '张三';
    let obj = { name };
    console.log(obj.name);
  };
}

// 输入输出第一题
{
  const test = () => {
    x = [1, 2, { a: 1 }];
    y = x;
    z = [...x];
    y[0] = 2;
    y[2].b = 2;
    z[2].a = 4;
    console.log(x, y, z);
  };
  // test();
  [2, 2, { a: 4, b: 2 }];
  [2, 2, { a: 4, b: 2 }];
  [1, 2, { a: 4, b: 2 }];
}
// 输输出入第二题
{
  const test = () => {
    x = [1, 2, { a: 1 }];
    y = x;
    z = [...x];
    t = Object.assign(z[2], { b: 3 });
    y[0] = 2;
    y[2].b = 2;
    z[2].a = 4;
    console.log(x, y, z, t);
  };
  // test();
  // [2, 2, { a: 4, b: 2 }];
  // [2, 2, { a: 4, b: 2 }];
  // [1, 2, { a: 4, b: 2 }];
  // { a: 4, b: 2 };
}
// 输入输出第三题
{
  const test = () => {
    x = [1, 2, { a: 1 }];
    y = x;
    z = [...x];
    t = Object.assign({ b: 3 }, z[2]);
    y[0] = 2;
    y[2].b = 2;
    z[2].a = 4;
    console.log(x, y, z, t);
  };

  // test();
  // [2, 2, { a: 4, b: 2 }];
  // [2, 2, { a: 4, b: 2 }];
  // [1, 2, { a: 4, b: 2 }];
  // { b: 3, a：1 };
}

// 每个数到3的小孩子退出圈，求最后剩余的那个小孩的编号
{
  const test = () => {
    function findSurvivor(n) {
      let survivors = [];
      for (let i = 0; i < n; i++) {
        survivors.push(i + 1); // 初始化编号，从1开始
      }

      let index = 0; // 当前报数的位置
      while (survivors.length > 1) {
        // 每次数到3，就移除对应的小孩
        index = (index + 2) % survivors.length; // 因为数到3的小孩退出，所以是+2
        survivors.splice(index, 1);
      }

      return survivors[0]; // 返回最后剩下的小孩的编号
    }

    const numberOfChildren = 30;
    console.log(`最后剩下的小孩编号是: ${findSurvivor(numberOfChildren)}`);
  };

  // test();
}

{
  const test = () => {
    function poiont() {
      console.log('this1 === global', this === global); // true
      this.x = '111';
      this.y = '222';
      return this.x + this.y;
    }
    const pit = poiont();
    // console.log(x); // 111
    // console.log(y); // 222
    // console.log(pit); // 111222
    // const pit2 = new poiont();
    // console.log(pit2); // {x:'111',y:'222'}
  };

  // test();
}
