import { ReactElement } from "react";
import { IInputProps } from "../../types/components/IInputProps";
import IconComponent from "../Icon";
import "./style/input.css";

function InputComponent(props: IInputProps): ReactElement {
  return (
    <div className="input">
      <IconComponent width={ props.icon.width } height={ props.icon.height } image={ props.icon?.image } />
      <input type={ props.attr?.type } placeholder={ props.attr?.placeholder } className={`input-${props.style}`} onChange={ props.attr?.onChange } />
    </div>
  )
}

export default InputComponent;
