import inquirer from "inquirer";
import config from "../src/config.json";
import * as CREAT_METHOD from "./demo";

const nav = config.nav;

var newCpt = {
  version: "3.0.0",
  name: "",
  type: "",
  cName: "",
  desc: "",
  sort: 0,
  show: true,
  author: "",
};

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "组件英文名(每个单词的首字母都大写，如TextBox)：",
        validate(value) {
          let repeat = false;
          for (var i = 0; i < nav.length; i++) {
            for (var j = 0; j < nav[i].packages.length; j++) {
              if (nav[i].packages[j].name === value) {
                repeat = true;
              }
            }
          }

          if (repeat) {
            return "该组件名已存在！";
          }
          const pass = value && value.match(/^[A-Z]/);
          if (pass) {
            return true;
          }
          return "不能为空，且每个单词的首字母都要大写，如TextBox";
        },
      },
      {
        type: "input",
        name: "cName",
        message: "组件中文名(十个字以内)：",
        validate(value) {
          const pass = value && value.length <= 10;
          if (pass) {
            return true;
          }
          return "不能为空，且不能超过十个字符";
        },
      },
      {
        type: "input",
        name: "desc",
        message: "组件描述(五十个字以内)：",
      },
      {
        type: "rawlist",
        name: "type",
        message: "请选择组件类型(输入编号)：目前只支持组建模板",
        choices: ["component", "filter", "directive", "method"],
        validate(value) {
          const pass = value && /^[1-4]$/.test(value);
          if (pass) {
            return true;
          }
          return "输入有误！请输入选项前编号";
        },
      },
      {
        type: "input",
        name: "sort",
        message:
          "请选择组件分类(输入编号)：1布局组件，2操作反馈，3基础组件，4导航组件，5数据录入，6业务组件",
        validate(value) {
          const pass = /^[1-6]$/.test(value);
          if (pass) {
            return true;
          }
          return "输入有误！请输入选项前编号";
        },
      },
      //   {
      //     type: 'confirm',
      //     name: 'showDemo',
      //     message: '是否需要DEMO页面?',
      //     default: true
      //   },
      //   {
      //     type: 'confirm',
      //     name: 'showTest',
      //     message: '是否需要单元测试页面?',
      //     default: true
      //   },
      {
        type: "input",
        name: "author",
        message: "组件作者(可署化名):",
      },
    ])
    .then(function (answers) {
      const input = Object.assign(newCpt, answers);
      createNew(input);
    });
}


async function createNew({ name, desc }: typeof newCpt) {
  CREAT_METHOD.createTsx(name)
    .then(() => CREAT_METHOD.createScss(name))
    .then(() => CREAT_METHOD.createDemo(name))
    .then(() => CREAT_METHOD.createDoc(name, desc))
    .then(() => CREAT_METHOD.createType(name))
    .then(() => {
      let sort = newCpt.sort;
      newCpt.sort = nav[sort - 1].packages.length + 1;
      nav[sort - 1].packages.push(newCpt);
      config.nav = nav;

      const tempfile = JSON.stringify(config, null, 2);
      return CREAT_METHOD.addToPackageJson(tempfile);
    })
    .then(() => {
      console.log("是时候表演真正的技术了~");
      process.exit();
    });
}

function createComponent() {
  init();
}

createComponent();
