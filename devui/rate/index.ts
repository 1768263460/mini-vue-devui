import { App } from "vue";
import Rate from "./src/rate";

Rate.install = function (app: App): void {
  app.component(Rate.name, Rate);
}

export { Rate }

// 默认导出，单独引入 Rate 为后面的按需引入做准备
export default {
  title: "Rate 树",
  category: "数据展示",
  status: "20%",
  install(app: App): void {
    app.use(Rate as any);
  }
}