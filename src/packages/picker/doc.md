# Picker 组件

## 介绍

`Picker` 组件也就是选择器，可以用于实现单列或多列选项的选择。

对于选择器，最基本的是需要定义它可以选择的选项，定义选项的属性是 data ，它是一个二维数组，第一维度代表了有多少列，第二维度则代表了每列有哪些选项。

## 代码演示

### 单列选择器

是一个单列选择器的例子

```vue
<template>
  <section class="demo1">
    <jt-button @click="openSigle"> 单行 </jt-button>
  </section>
</template>

<script>
export default {
  methods: {
    openSigle() {
      const column1 = [
        { text: "剧毒", value: "剧毒" },
        { text: "蚂蚁", value: "蚂蚁" },
        { text: "幽鬼", value: "幽鬼" },
      ];
      const picker = this.$picker({
        title: "Picker",
        data: [column1],
        maskClosable: true,
      });
      picker.show();
    },
  },
};
</script>
```

### 多列选择器

如果传入了多列数据，则会生成相应的多列选择器。比如以下是一个三列的选择器：

```js
const column1 = [
  { text: "剧毒", value: "剧毒" },
  { text: "蚂蚁", value: "蚂蚁" },
  { text: "幽鬼", value: "幽鬼" },
];
const column2 = [
  { text: "输出", value: "输出" },
  { text: "控制", value: "控制" },
  { text: "核心", value: "核心" },
  { text: "爆发", value: "爆发" },
];
const column3 = [
  { text: "梅肯", value: "梅肯" },
  { text: "秘法鞋", value: "秘法鞋" },
  { text: "假腿", value: "假腿" },
  { text: "飞鞋", value: "飞鞋" },
];

export default {
  methods: {
    showMutiPicker() {
      if (!this.mutiPicker) {
        this.mutiPicker = this.$createPicker({
          title: "Multi-column Picker",
          data: [column1, column2, column3],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.mutiPicker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert",
      }).show();
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000,
      }).show();
    },
  },
};
```

### 选项的子属性别名

有时你可能不希望以 value 和 text 去定义选项的值和文案，而用别的命名，比如当你的数据来源的命名为 id 和 name 时，你可能希望直接用 id 和 name 来定义值和文案。这个时候，你可以使用 alias 属性去配置。比如，配置 value 的别名为 id，text 的别名为 name。

```js
export default {
  methods: {
    showAliasPicker() {
      if (!this.aliasPicker) {
        this.aliasPicker = this.$createPicker({
          title: "Use Alias",
          data: [
            [
              { id: 1, name: "A" },
              { id: 2, name: "B" },
              { id: 3, name: "C" },
            ],
          ],
          alias: {
            value: "id",
            text: "name",
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.aliasPicker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert",
      }).show();
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000,
      }).show();
    },
  },
};
```

### 实例方法 $updateProps

```js
const column1 = [
  { text: "剧毒", value: "剧毒" },
  { text: "蚂蚁", value: "蚂蚁" },
  { text: "幽鬼", value: "幽鬼" },
];
const column2 = [
  { text: "输出", value: "输出" },
  { text: "控制", value: "控制" },
  { text: "核心", value: "核心" },
  { text: "爆发", value: "爆发" },
];
const column3 = [
  { text: "梅肯", value: "梅肯" },
  { text: "秘法鞋", value: "秘法鞋" },
  { text: "假腿", value: "假腿" },
  { text: "飞鞋", value: "飞鞋" },
];

export default {
  methods: {
    showUpdatePropsPicker() {
      if (!this.updatePropsPicker) {
        this.updatePropsPicker = this.$createPicker({
          title: "Use $updateProps",
          data: [column1],
          selectedIndex: [0],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.updatePropsPicker.show();
      setTimeout(() => {
        this.updatePropsPicker.$updateProps({
          title: "Updated",
          data: [column1, column2, column3],
          selectedIndex: [1, 2, 3],
        });
      }, 1000);
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert",
      }).show();
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000,
      }).show();
    },
  },
};
```

## API

### Props

| 参数 | 说明               | 类型   | 默认值 |
| ---- | ------------------ | ------ | ------ |
| name | 图标名称或图片链接 | String | -      |

### Events

| 事件名 | 说明           | 回调参数     |
| ------ | -------------- | ------------ |
| click  | 点击图标时触发 | event: Event |
