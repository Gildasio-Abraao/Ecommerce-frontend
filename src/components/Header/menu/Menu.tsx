import { ReactElement } from "react";
import { IMenuProps } from "../../../types/components/IMenuProps";
import { Link } from "react-router-dom";
import IconComponent from "../../Icon";

function MenuComponent(props: { menuList: IMenuProps[] }): ReactElement {
  return (
    <nav className="menu">
      <div className="menu-desktop menu-dropdown">
        <Link to={"/products"} className="menu-link dropdown-trigger">
          Produtos
          <IconComponent image="/images/icons/down-arrow.png" width={15} height={15} />
        </Link>

        <button className="menu-mobile-btn">
          <IconComponent image="/images/icons/menu.png" width={25} height={25} />
        </button>

        <div className="menu-dropdown-content">
          { props.menuList.map((menu) => <Link to={menu.link} key={menu.link} className="menu-link">{ menu.text }</Link>) }
        </div>
      </div>
    </nav>
  )
}

export default MenuComponent;
