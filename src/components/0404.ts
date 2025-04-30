enum NodeAction {
  Browser = 1,
  Search = 2,
}

type BDataType = {
  mode: NodeAction;
  age: number;
};
type SDataType = {
  mode: NodeAction;
  sex: string;
};

type NodeTypeMap = {
  [NodeAction.Browser]: BDataType;
  [NodeAction.Search]: SDataType;
};

const isNode = <T extends NodeTypeMap = NodeTypeMap>(node: T, targetNodeType: keyof T): boolean => {
  if (node) {
    return false;
  }
  return true;
};

const test = () => {
  function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('异步操作成功');
        // reject(new Error('异步操作失败'));
      }, 1000);
    });
  }

  async function main() {
    try {
      const result = await asyncOperation();
      console.log('结果:', result);
    } catch (error: any) {
      console.error('捕获到错误:', error.message);
    }
  }

  main();
};

// const result = JSON.parse(' ');
// console.log('🤡 ~ result:', result);
