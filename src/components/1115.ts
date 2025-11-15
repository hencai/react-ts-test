/***********************
 *  1. 基础打印
 ************************/
console.log('普通 log 输出:', 123, { a: 1 });
console.info('info 输出');
console.warn('warn 输出');
console.error('error 输出');

/***********************
 *  2. 字符串格式化
 ************************/
console.log('你好 %s，你有 %d 条消息', 'Tom', 5);
console.log('JSON: %o', { x: 1, y: 2 });
console.log('浮点数: %f', 3.14159);

/***********************
 *  3. 分组输出
 ************************/
console.group('外层分组');
console.log('A');
console.group('内层分组');
console.log('B');
console.groupEnd();
console.groupEnd();

console.groupCollapsed('折叠分组');
console.log('组里的内容');
console.groupEnd();

/***********************
 *  4. 计时器（time）
 ************************/
console.time('测试耗时');
setTimeout(() => {
  console.timeEnd('测试耗时');
}, 2500);

// 自定义小计
console.time('下载任务');
setTimeout(() => {
  console.timeLog('下载任务', '已收到 10% 数据');
  setTimeout(() => {
    console.timeEnd('下载任务');
  }, 500);
}, 500);

/***********************
 *  5. 计数器（count）
 ************************/
console.count('点击按钮');
console.count('点击按钮');
console.countReset('点击按钮');
console.count('点击按钮');

/***********************
 *  6. 断言（assert）
 ************************/
console.assert(1 === 2, '断言失败：1 != 2'); // 只有条件为 false 才打印
console.assert(true, '不会显示');

/***********************
 *  7. 表格输出（table）
 ************************/
const users = [
  { id: 1, name: 'Tom', age: 20 },
  { id: 2, name: 'Jerry', age: 22 },
];
console.table(users);

/***********************
 *  8. 堆栈追踪（trace）
 ************************/
function fn1() {
  fn2();
}
function fn2() {
  console.trace('追踪堆栈位置');
}
fn1();

/***********************
 *  9. 清空控制台
 ************************/
console.clear(); // 清屏（浏览器和终端行为略有不同）

/***********************
 * 10. 调试（debug）
 ************************/
console.debug('debug 信息'); // 有些环境需打开 verbose 才显示

/***********************
 * 11. dir / dirxml
 ************************/
console.dir({ a: 1, b: { c: 2 } }, { depth: 5 });

const div = document.createElement('div');
div.innerHTML = '<p>Hello</p>';
console.dirxml(div); // 以 XML/HTML 样式打印节点（浏览器专用）

/***********************
 * 12. profile / profileEnd（浏览器）
 ************************/
console.profile('性能分析');
// ...要分析的代码
console.profileEnd('性能分析');

/***********************
 * 13. markTimeline / timeStamp（Chrome 用来标记性能时间线）
 ************************/
console.timeStamp('事件: 开始加载');

/***********************
 * 14. warn/error 打印对象
 ************************/
console.warn('警告', { x: 1 });
console.error('错误', new Error('出错啦'));

/***********************
 * 15. console.count + 循环调试
 ************************/
for (let i = 0; i < 3; i++) {
  console.count('循环次数');
}
console.countReset('循环次数');

/***********************
 * 16. console.memory（Chrome 独有，显示内存使用情况）
 ************************/
console.log(console.memory); // { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize }

/***********************
 * 17. 各种风格化输出（浏览器）
 ************************/
console.log('%c这是一段红色文字', 'color: red; font-size: 16px;');
console.log('%c多行样式%c混合输出', 'color: blue; font-weight: bold;', 'color: green;');
