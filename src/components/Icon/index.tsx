import { ReactElement } from "react";
import { IIconProps } from "../../types/components/IIconProps";

function IconComponent(props: IIconProps): ReactElement {
  return (
    <div className="icon">
      <img src={props.image} width={props.width} height={props.height} alt="Icon" />
    </div>
  )
}

export default IconComponent;
