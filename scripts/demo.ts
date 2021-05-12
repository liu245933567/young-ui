import path from "path";
import fs from "fs";

const packagesPath = path.join(__dirname, '../src/packages/');

function writeFile(tarPath: string, fileName: string, text: string) {
  return new Promise((resolve) => {
    const filePath = path.join(tarPath, fileName);
    if (!fs.existsSync(tarPath)) {
      fs.mkdirSync(filePath);
    }
    fs.writeFile(filePath, text, (err) => {
      if (err) throw err;
      resolve(`生成 ${fileName} 文件成功`);
    });
  });
}

function getKebabCase( str ) {
  str = str.replace(str[0], str[0].toLowerCase())

  return str.replace( /[A-Z]/g, function( i ) {
      return '-' + i.toLowerCase();
  })
}

export function createTsx(name: string) {
  const className = getKebabCase(name);
  const text = `
  import { Component, Prop } from "vue-property-decorator";
  import tsx from "vue-tsx-support";
  import './index.scss';

  @Component({name: '${className}'})
  class ${name} extends tsx.Component<{}> {
    protected render() {
      return (
        <div class="${className}"></div>
      );
    }
  }
  
  export default ${name};
  `;

  return writeFile(packagesPath, 'index.tsx', text)
}

export function createDoc(name: string, desc: string) {
  const text = `
  # ${name}组件
  ### 介绍
  ${desc}
  基于 xxxxxxx
  ### 安装
  ## 代码演示
  ### 基础用法1
  ## API
  ### Props
  | 参数         | 说明                             | 类型   | 默认值           |
  |--------------|----------------------------------|--------|------------------|
  | name         | 图标名称或图片链接               | String | -                |
  ### Events
  | 事件名 | 说明           | 回调参数     |
  |--------|----------------|--------------|
  | click  | 点击图标时触发 | event: Event |
  `;

  return writeFile(packagesPath, 'doc.md', text)
}

export function createScss(name: string) {
  const text = `
  .jt-${getKebabCase(name)} {}
  `;

  return writeFile(packagesPath, 'index.scss', text);
}

export function createDemo(name: string) {
  const className = getKebabCase(name); 
  const text = `
  <template>
    <div class="demo-${className}">
      <h2>${name} 基础用法</h2>
      <div></div>
    </div>
  </template>
  <script>
  export default {
    name: 'demo-${className}'
  }
  </script>

  <style lang="scss" scoped>
  .demo-${className} { }
  </style>
  `;

  return writeFile(packagesPath, 'demo.vue', text);
}

export function createType(name: string) {
  const className = getKebabCase(name); 
  const text = `
  import Vue from "vue";

  export declare class ${className} extends Vue {}
  `;

  return writeFile(packagesPath, 'index.d.ts', text);
}

export function addToPackageJson(text) {
  return writeFile(path.resolve(__dirname, '../src'), 'config.json', text);
}
