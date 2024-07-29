import { ReactElement, Fragment, useState, useEffect } from "react";
import BannerComponent from "../components/Banner";
import ProductShelfComponent from "../components/Product/ProductShelf";
import { IProductProps } from "../types/components/IProductProps";
import TopbarComponent from "../components/Topbar";
import HeaderComponent from "../components/Header";
import { useLoaderData } from "react-router-dom";
import { IProductsResponse } from "../types/pages/IRequestTypes";
import { getMoreProduct } from "../utils/ApiClient";

function Home(): ReactElement {
  const [errors, setErrors] = useState<Error | undefined>();
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [productPage, setProductPage] = useState<number>(1);
  const loaderData: IProductsResponse = useLoaderData() as IProductsResponse;  

  useEffect(() => {
    setProducts(loaderData.products);
    setProductPage(loaderData.currentPage);
  }, [loaderData]);

  return (
    <Fragment>
      <header>
        <TopbarComponent text="Aproveite as nossas oportunidades!!!" />
        <HeaderComponent />
      </header>

      <section>
        <BannerComponent desktopImage="/images/banner-desktop.webp" mobileImage="/images/banner-mobile.webp" />
      </section>

      <section>
        <h2 className="page-title">descubra as fragâncias que combinam com você</h2>
        <ProductShelfComponent products={ products } />
        {
          products.length !== loaderData.total
            ?
              <div className="btn-container">
                { errors ? <p className="error-message">Aconteceu algum erro ao tentar carregar mais produtos!</p> : null }
                <button className="btn btn-more" onClick={() => getMoreProduct({ errorCallback: setErrors, setCallback: setProducts, productPage: productPage, products })}>Carregar outros</button>
              </div>
            : null
        }
      </section>
    </Fragment>
  )
}

export default Home;
