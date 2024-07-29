import { ReactElement, useState } from "react";
import { IProductProps } from "../../types/components/IProductProps";
import "./style/product.css";
import RatingComponent from "./Rating";
import { formatProductPrice } from "../../utils/Helper";
import { addItemCart } from "../../utils/ApiClient";
import IconComponent from "../Icon";

function ProductComponent(props: IProductProps): ReactElement {
  const [errors, setErrors] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const getProductPrice = (): ReactElement => {
    if(props.offer) {
      return (
        <p>
          { formatProductPrice(props.offer) }
          <span className="product-total"> { formatProductPrice(props.price) } </span>
          <span className="product-badge">-20%</span>
        </p>
      )
    }

    return (
      <p>{ formatProductPrice(props.price) }</p>
    )
  }

  return (
    <div className="product">
      <div className="product-header">
        <img src={ props.image } className="product-image" alt={ props.name } />
      </div>
      <div className="product-body">
        <p className="product-name">{ props.name }</p>
        <div className="product-rate">
          <RatingComponent value={ props.rate } />
        </div>
        <p className="product-price">
          { getProductPrice() }
        </p>
        {
          errors ? <p className="error-message">Aconteceu algum erro ao tentar adicionar no carrinho!</p> : null
        }
        {
          !isLoading
            ? <div className="btn btn-buy" onClick={() => addItemCart({ _id: props._id, errorCallback: setErrors, setCallback: setIsLoading })}>Adicionar ao carrinho</div>
            : <div className="btn btn-buy"><IconComponent width={20} height={20} image="/images/icons/loader.gif" /></div>
        }
      </div>
    </div>
  )
}

export default ProductComponent;
