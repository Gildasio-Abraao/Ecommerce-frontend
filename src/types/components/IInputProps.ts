import { InputHTMLAttributes } from "react";
import { IIconProps } from "./IIconProps";

export interface IInputProps {
  attr?: InputHTMLAttributes<HTMLInputElement>,
  style?: 'primary' | 'secondary',
  icon: IIconProps,
}
