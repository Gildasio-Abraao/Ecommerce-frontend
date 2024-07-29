import { ReactElement, useEffect, useState } from "react";
import { IProductProps } from "../../types/components/IProductProps";
import ProductShelfComponent from "../../components/Product/ProductShelf";
import HeaderComponent from "../../components/Header";
import "./style/style.css";
import { useLoaderData } from "react-router-dom";
import { IProductsResponse } from "../../types/pages/IRequestTypes";
import { getMoreProduct } from "../../utils/ApiClient";

function Search(): ReactElement {
  const loaderData: IProductsResponse = useLoaderData() as IProductsResponse;
  const [errors, setErrors] = useState<Error | undefined>();
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [productPage, setProductPage] = useState<number>(1);

  useEffect(() => {
    setProducts(loaderData.products);
    setProductPage(loaderData.currentPage);
  }, [loaderData]);

  return (
    <div className="product-list">
      <header>
        <HeaderComponent />
      </header>

      <section className="search-result">
        <ProductShelfComponent products={ products } />
      </section>

      {
        products.length !== loaderData.total
        ?
        <div className="btn-container">
          { errors ? <p className="error-message">Aconteceu algum erro ao tentar carregar mais produtos!</p> : null }
          <button className="btn btn-more" onClick={() => getMoreProduct({ errorCallback: setErrors, setCallback: setProducts, productPage: productPage, products })}>Carregar outros</button>
        </div>
        : null
      }
    </div>
  )
}

export default Search; 
