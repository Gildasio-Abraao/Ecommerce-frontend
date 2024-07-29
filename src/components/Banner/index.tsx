import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IBannerProps } from "../../types/components/IBannerProps";
import "./style/banner.css";

function BannerComponent(props: IBannerProps): ReactElement {
  return (
    <div className="banner">
      <Link className="banner-image" to={ props.link || "#" }>
        <img src={ props.desktopImage } className="banner-desktop-image"/>
        <img src={ props.mobileImage } className="banner-mobile-image" />
      </Link>
    </div>
  )
}

export default BannerComponent;
