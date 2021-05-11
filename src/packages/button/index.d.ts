import Vue from "vue";

// export class VanComponent extends Vue {
//   static name: string;

//   static install(vue: typeof Vue): void;
// }

export enum ButtonType {
  default = "default",
  primary = "primary",
}

export enum ButtonSize {
  large = "large",
  small = "small",
}

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  num: number;
}

// export class Button extends Vue {
//   props: ButtonProps;
//   type?: ButtonType;
//   size?: ButtonSize;
//   num: number;
//   testProp: string;
//   Component: typeof Vue;
// }

export declare class Button extends Vue {
  type?: ButtonType;
  size?: ButtonSize;
  num: number;
  testProp: string;
}
