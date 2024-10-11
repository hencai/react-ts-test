import React from "react";
class MyComponent extends React.Component {
  // render 阶段 ： 纯净且不包含副作用，可能会被React暂停、终止或重新启动
  constructor(props) {
    super(props);
  }

  getDerivedStateFromProps(props, state): object {
    return {};
  }

  shouldComponentUpdate(nextProps, nextState): boolean {
    return true;
  }

  render() {
    return <div></div>;
  }

  // pre-commit 阶段：可以读取DOM
  getSnapshotBeforeUpdate(nextProps, nextState) {}

  // commit 阶段，可以使用DOM，运运行副作用，安排更新。
  componentDidMount(): void {}

  componentDidUpdate(prevProps: any, prevState, snapshot): void {}

  componentWillUnmount(): void {}
}
