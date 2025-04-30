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
};
