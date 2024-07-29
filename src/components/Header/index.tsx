import { ChangeEvent, FormEvent, Fragment, ReactElement, useState } from "react";
import MenuComponent from "./menu/Menu";
import { IMenuProps } from "../../types/components/IMenuProps";
import IconComponent from "../Icon";
import "./style/header.css";
import InputComponent from "../Form/Input";
import { Link } from "react-router-dom";

function HeaderComponent(): ReactElement {
  const [searchParam, setSearchParam] = useState<string>();
  const search = (evt: FormEvent) => {
    evt.preventDefault();
    window.location.href = `/products?query=${searchParam}`;
  }
  const menuList: IMenuProps[] = [
    {
      text: "Produtos",
      link: "/products",
    },
    {
      text: "Feminino",
      link: "/products/?query=feminino",
    },
    {
      text: "Masculino",
      link: "/products/?query=masculino",
    }
  ]

  return (
    <Fragment>
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo.png" className="logo" alt="Logo Cosméticos&Co" />
          </Link>
        </div>

        <div className="header-menu">
          <MenuComponent menuList={menuList} />
        </div>

        <div className="header-form">
          <form onSubmit={(evt) => search(evt)}>
            <InputComponent
              style="primary"
              attr={{ type: 'search', placeholder: 'O que está buscando hoje?', name: 'query', onChange: (evt: ChangeEvent<HTMLInputElement>) => setSearchParam(evt.target.value), value: searchParam }}
              icon={{ image: '/images/icons/loupe.png', width: 20, height: 20, }}
            />
          </form>
        </div>

        <div className="header-actions">
          <Link to="/cart">
            <IconComponent width={25} height={25} image="/images/icons/shopping-cart.png" />
          </Link>
          <IconComponent width={20} height={20} image="/images/icons/user.png" />
        </div>
      </div>
    </Fragment>
  )
}

export default HeaderComponent;
