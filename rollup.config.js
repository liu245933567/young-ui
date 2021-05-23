// rollup.config.js
const fs = require('fs-extra');
const path = require('path');
const pkg = require('./package.json');
import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss';
import postcssScss from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import base64 from 'postcss-base64';
import url from 'rollup-plugin-url';

import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory();
}

const packages = {};
const dir = path.join(__dirname, './src/packages');
const files = fs.readdirSync(dir);

files.forEach(file => {
  const absolutePath = path.join(dir, file);
  if (isDir(absolutePath)) {
    packages[file] = `${dir}/${file}/index.js`;
  }
});
const allScript = `${pkg.name}.all`;
packages[allScript] = 'packages/index.js';

function createRollupConfig(file, name) {
  const config = {
    input: file,
    output: {
      file: name === allScript ? '/dist/lib/index.js' : `/dist/lib/${name}/index.js`,
      format: 'es',
      name: name,
      sourcemap: true
    },
    plugins: [
      vue(),
      alias({
        '@': path.resolve(__dirname, './src'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@packages': path.resolve(__dirname, './src/packages'),
        '@mixins': path.resolve(__dirname, './src/mixins'),
        '@examples': path.resolve(__dirname, './src/examples')
      }),
      postcss({
        extract: true,
        parser: postcssScss,
        plugins: [
          base64({
            extensions: ['.png', '.jpeg'],
            root: './packages/'
          }),
          autoprefixer({ add: true })
        ]
      }),
      url({
        limit: 10 * 1024
        //include: ['.svg']
      }),
      progress(),
      filesize()
    ]
  };
  return config;
}

const buildPackages = [];
for (let name in packages) {
  const file = packages[name];
  buildPackages.push(createRollupConfig(file, name));
}

export default buildPackages;