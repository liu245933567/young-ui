import Vue from "vue";

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

export declare class Button extends Vue {
  type?: ButtonType;
  size?: ButtonSize;
  num: number;
  testProp: string;
}
