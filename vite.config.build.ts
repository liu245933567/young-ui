import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";
// import config from "./package.json";

// const banner = `/*!
// * ${config.name} v${config.version} ${new Date()}
// * (c) 2021 @jdf2e.
// * Released under the MIT License.
// */`;

const resolve = path.resolve;

export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@utils", replacement: resolve(__dirname, "./src/utils") },
      { find: "@packages", replacement: resolve(__dirname, "./src/packages") },
      { find: "@mixins", replacement: resolve(__dirname, "./src/mixins") },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
    },
  },
  plugins: [createVuePlugin()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      input: {
        button: resolve(__dirname, './src/packages/button/index.vue')
      }
  }
})
