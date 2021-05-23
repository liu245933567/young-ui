import Cell from './cell.vue';

Cell.install = function (Vue) {
  Vue.component(Cell.name, Button);
};

export default Cell;