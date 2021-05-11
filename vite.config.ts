import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
// import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy';
// import { createVuePlugin } from "vite-plugin-vue2";
import Markdown from 'vite-plugin-md';
import path from "path";

const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: "/2x/",
  server: {
    port: 2021,
    proxy: {
      "/devServer": {
        target: "https://nutui.jd.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, ""),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss"; @import "@/sites/assets/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    createVuePlugin(),
    // vue({
    //   include: [/\.vue$/, /\.md$/]
    // }),
    Markdown(),
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  build: {
    target: "es2015",
    outDir: "./dist/2x/",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, "index.html"),
        mobile: resolve(__dirname, "demo.html"),
      },
    },
  },
});
