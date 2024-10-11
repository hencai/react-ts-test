/*
 * @Author: xbai xbai@foxmail.com
 * @Date: 2024-10-09 09:12:52
 * @LastEditors: xbai xbai@foxmail.com
 * @LastEditTime: 2024-10-09 14:46:25
 * @FilePath: \react-ts\src\components\template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 类型定义

// 二叉树
type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor: (val?: number, left?: TreeNode | null, right?: TreeNode | null) => TreeNode | null
};

// 链表
type ListNode = {
  val: number
  next: ListNode | null
  constructor: (val?: number, next?: ListNode | null) => ListNode | null
};

//  双指针，只有一个输入，从两端开始遍历
{
  const fn = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let res = Number.MIN_SAFE_INTEGER;

    while (left < right) {
      if (arr[left] > arr[right]) {
        res = Math.max(res, arr[left]);
        ++left;
      }
      else {
        res = Math.max(res, arr[right]);
        --right;
      }
    }

    return res;
  };

  // 示例：求最大值
  // const data = [1, 8, 6, 5, 3, 2, 9];
  // console.log(fn(data));
}

// 双指针,有两个输入，两个都需要遍历完
{
  const fn = (arr1, arr2) => {
    let start1 = 0;
    let start2 = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (start1 < arr1.length && start2 < arr2.length) {
      if (arr1[start1] > arr2[start2]) {
        max = Math.max(max, arr1[start1]);
        ++start1;
      }
      else {
        max = Math.max(max, arr2[start2]);
        ++start2;
      }
    }

    while (start1 < arr1.length) {
      max = Math.max(max, arr1[start1]);
      ++start1;
    }

    while (start2 < arr2.length) {
      max = Math.max(max, arr2[start2]);
      ++start2;
    }

    return max;
  };

  // 示例
  // const data1 = [1, 4, 6, 9, 10];
  // const data2 = [2, 19, 16, 27, 5];
  // console.log(fn(data1, data2));
}

// 滑动窗口
{
  const fn = (arr, k) => {
    let left = 0;
    let cur = 0;
    const res: number[] = [];

    for (let right = 0; right < arr.length; ++right) {
      // 根据题意，对第一个窗口内的元素进行处理
      cur += arr[right];

      while (right - left === k - 1) {
        // 达到窗口条件，移除left元素；
        res.push(cur);
        cur -= arr[left];
        ++left;
      }
    }
    return res;
  };

  // 示例，求数组滑动窗口内的和
  // const data = [1, 3, 5, 6, 7, 3, 2];
  // console.log(fn(data, 3));
}

// 构建前缀和
{
  const fn = (arr: number[]) => {
    const prefix: number[] = new Array(arr.length).fill(0);
    prefix[0] = arr[0];

    for (let i = 1; i < arr.length; ++i) {
      prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
  };

  // 示例
  // const data = [1, 3, 5, 6, 7, 3, 2];
  // console.log(fn(data));
}

// 快慢指针
{
  const fn = (head: ListNode) => {
    let slow = head;
    let fast = head;
    const ans = 0;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return ans;
  };

  // 示例
}

// 反转链表
{
  const fn = (head: ListNode) => {
    let cur: ListNode | null = head;
    let prev: ListNode | null = null;
    while (cur) {
      const nextNode = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextNode;
    }

    return prev;
  };
}

// 找到符合确切条件的子数组数
{
  // 示例：寻找满足特定前缀和的子数组个数
  const fn = (arr: number[], k: number): number => {
    const count = new Map();
    count.set(0, 1);
    let cur = 0;
    let res = 0;

    for (const num of arr) {
      cur += num;
      res += count.get(cur - k) || 0;
      count.set(cur, (count.get(cur) || 0) + 1);
    }

    return res;
  };
}

// 单调递增栈
{
  // 示例，求单调递增子序列和
  const fn = (arr: number[]): number => {
    const stack: number[] = [];
    let total = arr.reduce((sum, cur) => sum + cur);

    for (const num of arr) {
      while (stack.length && stack[stack.length - 1] > num) {
        total -= stack[stack.length - 1];
        stack.pop();
      }

      stack.push(num);
    }

    return total;
  };

  // 示例
  const data = [1, 3, 7, 5, 2, 9, 6];
  console.log(fn(data));
}

// 二叉树：DFS递归
{
  const dfs = (root: TreeNode | null) => {
    if (!root) return;

    const ans = 0;

    dfs(root.left);
    dfs(root.right);

    return ans;
  };
}
