import TreeInstall, { Tree } from "./tree";
import RateInstall, { Rate } from "./rate";
import type { App } from 'vue';

const installs = [
  TreeInstall,
  RateInstall
];

export {
  Tree,
  Rate
}

export default {
  version: '0.0.1',
  install(app: App) {
    installs.forEach((component) => {
      app.use(component);
    });
  }
}

