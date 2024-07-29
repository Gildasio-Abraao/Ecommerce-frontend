import { Fragment } from "react/jsx-runtime";
import { ITopbarProps } from "../../types/components/ITopbarProps";
import './style/style.css';
import { ReactElement } from "react";

function TopbarComponent(props: ITopbarProps): ReactElement {
  return (
    <Fragment>
      <div className="topbar">
        <p className="topbar-text">{ props.text }</p>
        {  props.closeable ?? <div className="close-btn">X</div> }
      </div>
    </Fragment>
  )
}

export default TopbarComponent;
