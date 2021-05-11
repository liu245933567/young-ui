import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import createJsxPlugin from "@vitejs/plugin-vue-jsx"
import Markdown from 'vite-plugin-md';
import path from "path";

const resolve = path.resolve;
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
    open: false
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss"; @import "@/sites/assets/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    createVuePlugin({
      include: [/\.vue$/, /\.md$/]
    }),
    createJsxPlugin(),
    Markdown(),
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
