import { App } from "vue";
import Tree from "./src/tree";

Tree.install = function (app: App): void {
  app.component(Tree.name, Tree);
}

export { Tree }

// 默认导出，单独引入 Tree 为后面的按需引入做准备
export default {
  title: "Tree 树",
  category: "数据展示",
  status: "100%",
  install(app: App): void {
    app.use(Tree as any);
  }
}