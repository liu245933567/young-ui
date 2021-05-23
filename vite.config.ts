import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
// import createJsxPlugin from "@vitejs/plugin-vue-jsx";
import Markdown from "vite-plugin-md";
import path from "path";

const resolve = path.resolve;
export default defineConfig({
  base: "/2x/",
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@utils", replacement: resolve(__dirname, "./src/utils") },
      { find: "@packages", replacement: resolve(__dirname, "./src/packages") },
      { find: "@mixins", replacement: resolve(__dirname, "./src/mixins") },
      { find: "@examples", replacement: resolve(__dirname, "./src/examples") }
    ]
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
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
      include: [/\.vue$/, /\.md$/],
    }),
    // createJsxPlugin(),
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
