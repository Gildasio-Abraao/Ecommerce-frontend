import { ReactElement, useState } from "react";
import IconComponent from "../Icon";
import { formatProductPrice } from "../../utils/Helper";
import "./style/product-cart.css";
import { ICartProps } from "../../types/pages/ICart";
import { updateItemCart } from "../../utils/ApiClient";

function ProductCart(props: { product: ICartProps, deleteItem: Function }): ReactElement {
  const [productQuantity, setProductQuantity] = useState<number>(props.product.quantity);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [errors, setErrors] = useState<Error | undefined>();

 const changeItemQuantity = (quantity: number) => {
  setProductQuantity(quantity);
  updateItemCart({ errorCallback: setErrors, setCallback: setIsLoading, itemID: props.product.productId._id, quantity: quantity });
 }

  return (
    <div className="product-cart">
      <div className="product-cart-image">
        <img src={props.product.productId.image} alt={props.product.productId.name} className="product-cart-image" />
      </div>

      <div className="product-cart-body">
        {
          errors ? <p className="error-message">Ocorreu um erro ao atualizar o carrinho!</p> : null
        }

        <div className="product-cart-name">
          <p>{ props.product.productId.name }</p>
          <button className="btn-delete" onClick={() => props.deleteItem()}>
            <IconComponent image="/images/icons/delete.png" width={20} height={20} />
          </button>
        </div>

        <div className="product-footer">
          <p className="product-cart-price">{ formatProductPrice(props.product.productId.price) }</p>
          <div className="cart-quantity-input">
            <button className={`product-cart-qty-count product-cart-qty-count--minus ${isLoading ?? 'disabled'}`} data-action="minus" type="button" onClick={ () => productQuantity > 1 ? changeItemQuantity(productQuantity - 1) : null}>-</button>
            <input className="product-cart-qty" type="number" name="product-cart-qty" min="1" onBlur={(evt) => changeItemQuantity(parseInt(evt.target.value))} max="10" value={ productQuantity } />
            <button className={`product-cart-qty-count product-cart-qty-count--add ${isLoading ?? 'disabled'}`} data-action="add" type="button" onClick={ () => changeItemQuantity(productQuantity + 1) }>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart;
