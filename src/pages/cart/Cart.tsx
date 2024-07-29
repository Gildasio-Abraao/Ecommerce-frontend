import { ReactElement, useEffect, useState } from "react";
import { ICartProps, ICartResponse } from "../../types/pages/ICart";
import ProductCart from "../../components/Product/ProductCart";
import { formatProductPrice } from "../../utils/Helper";
import InputComponent from "../../components/Form/Input";
import IconComponent from "../../components/Icon";
import { useLoaderData } from "react-router-dom";
import HeaderComponent from "../../components/Header";
import "./style/cart.css";
import { deleteItemCart } from "../../utils/ApiClient";

function Cart(): ReactElement {
  const [errors, setErrors] = useState<Error | undefined>();
  const [products, setProducts] = useState<ICartProps[]>([]);
  const loaderData: ICartResponse = useLoaderData() as ICartResponse;

  useEffect(() => {
    setProducts(loaderData.items);
  }, [loaderData]);

  return (
    <div className="cart">
      <header>
        <HeaderComponent />
      </header>
      <h2 className="page-title">Seu carrinho</h2>
      {
        errors
          ? <p className="error-message">{ errors?.message }</p>
          : null
      }
      <div className="cart-container">
        <div className="cart-card cart-products">
          {
            products.length > 0
              ? products.map((product) => <ProductCart product={ product } deleteItem={() => deleteItemCart({ errorCallback: setErrors, itemID: product.productId._id })} key={product.productId._id} />)
              : <p className="error-message">Você não tem nenhum produto disponível</p>
          }
        </div>

        <div className="cart-card cart-details">
          <h3 className="card-title">Sumário</h3>

          <div className="cart-details-item">
            <p className="cart-details-label">Subtotal</p>
            <p className="cart-details-value">{ formatProductPrice(loaderData.subtotal) }</p>
          </div>

          <div className="cart-details-item">
            <p className="cart-details-label">Desconto</p>
            <p className="cart-details-value cart-details-discount">{ formatProductPrice(loaderData.discount) }</p>
          </div>

          <div className="cart-details-item">
            <p className="cart-details-label">Frete</p>
            <p className="cart-details-value">{ formatProductPrice(loaderData.shipping) }</p>
          </div>

          <div className="cart-details-item cart-details-total">
            <p className="cart-details-label">Total</p>
            <p className="cart-details-value">{ formatProductPrice(loaderData.total) }</p>
          </div>

          <div className="cart-details-item">
            <InputComponent icon={{image: "/images/icons/coupon.png", width: 25, height: 25 }} style="primary" attr={{ name: 'coupon', placeholder: 'Cupom' }} />
            <button className="btn btn-cart">Aplicar</button>
          </div>

          <button className="btn btn-finish-cart">Finalizar compra <IconComponent height={25} width={25} image="/images/icons/right-arrow.png" /></button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
