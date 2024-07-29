import { ReactElement } from "react";
import { IProductProps } from "../../types/components/IProductProps";
import ProductComponent from "./Product";
import "./style/product.css";

function ProductShelfComponent(props: { products: IProductProps[] }): ReactElement {  
  return (
    props.products.length > 0 ?
      <div className="product-shelf">
        {
          props.products.map(
            (product) => 
              <ProductComponent
                name={ product.name }
                _id={ product._id }
                rate={ product.rate }
                price={ product.price }
                description={ product.description }
                image={ product.image }
                offer={ product.offer }
                stockQuantity={ product.stockQuantity }
                key={ product._id }
              />
          )
        }
      </div>
    : <p className="not-found-products">Nenhum produto encontrado!</p>
  );
}

export default ProductShelfComponent;
