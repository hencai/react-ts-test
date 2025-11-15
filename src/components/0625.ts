// function testSelectorLogic(darkDisableSelector: string, darkSelector: string) {
//   // 将 darkDisableSelector 按逗号分割并去除空格，得到禁用暗黑模式的选择器数组
//   const darkDisableSelectors = darkDisableSelector.split(',').map((selector) => selector.trim());

//   // 将 darkSelector 按逗号分割并去除空格，得到暗黑模式的选择器数组
//   const darkSelectors = darkSelector.split(',').map((selector) => selector.trim());

//   // 组合暗黑模式选择器和禁用暗黑模式选择器，生成高权重选择器数组
//   const highWeightSelectors = darkSelectors
//     .map((selector) => darkDisableSelectors.map((disableSelector) => `${selector}${disableSelector}`))
//     .flat();

//   // 生成 :root 与禁用暗黑模式选择器组合的高权重选择器数组
//   const rootHightWightSelectors = darkDisableSelectors.map((selector) => `:root${selector}`);

//   // 合并所有高权重选择器，并用换行符连接
//   const allHightWeightSelectors = [...highWeightSelectors, ...rootHightWightSelectors].join(',\n');

//   // 生成 CSS 文件头部内容，包含自动生成提示和高权重选择器
//   const cssContent = `/* 此文件是自动生成，请勿修改本文件 */\n:root,\n:${allHightWeightSelectors} {\n`;

//   // 返回生成的 CSS 内容，供测试查看
//   return cssContent;
// }

// // 测试数据
// const darkDisableSelector = ".dark[data-disable-dark-mode='true'], .no-dark";
// const darkSelector = '.dark, .theme-dark';

// // 调用测试函数并输出结果
// console.log(testSelectorLogic(darkDisableSelector, darkSelector));

function testSelectorLogic(darkDisableSelector: string, darkSelector: string) {
  // 将选择器按逗号分割并去除空格，得到选择器数组
  const darkDisableSelectors = darkDisableSelector.split(',').map((selector) => selector.trim());
  const darkSelectors = darkSelector.split(',').map((selector) => selector.trim());

  // 生成所有高权重选择器并合并
  const highWeightSelectors = [
    // :root 与禁用暗黑模式选择器的组合
    // ...darkDisableSelectors.flatMap((selector) => [`:root${selector}`, `:root ${selector}`]),

    // 暗黑模式选择器与禁用暗黑模式选择器的组合
    ...darkSelectors.flatMap((selector) =>
      darkDisableSelectors.flatMap((disableSelector) => [
        `${selector}${disableSelector}`,
        `${selector} ${disableSelector}`,
      ]),
    ),
  ].join(',\n');

  // 生成 CSS 文件内容，包含自动生成提示
  return `/* 此文件是自动生成，请勿修改本文件 */\n:root,\n${highWeightSelectors} {\n`;
}

// 测试数据
const darkDisableSelector = '.no-dark';
const darkSelector = '.dark, .theme-dark';

// 调用测试函数并输出结果
console.log(testSelectorLogic(darkDisableSelector, darkSelector));
