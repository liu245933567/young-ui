import pack from '../package.json';
import config from '../src/config.json';
import path from 'path';
import fs from 'fs-extra';

let importStr = `import Vue from 'vue';\n`;
const packages = [];
config.nav.map(item => {
  item.packages.forEach(element => {
    let { name, show, type } = element;
    if (show) {
      importStr += `import ${name} from './packages/${name.toLowerCase()}';\n`;
      packages.push(name);
    }
  });
});
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}`;
let fileStr = `${importStr}
${installFunction}
export { ${packages.join(',')}  };
export default { install, version:'${pack.version}'};`;
fs.outputFile(
  path.resolve(__dirname, '../src/jetair.ts'),
  fileStr,
  'utf8',
  error => {
    // logger.success(`${package_config_path} 文件写入成功`);
  }
);
