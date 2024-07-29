import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/search/Search";
import { getCart, getProducts } from "../utils/ApiClient";
import Cart from "../pages/cart/Cart";
import GenericErrorPage from "../pages/error/GenericError";

const URI = import.meta.env.VITE_DOMAIN;

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return getProducts(`${URI}/api/products`);
    },
    errorElement: <GenericErrorPage text="Ocorreu algum erro ao buscar os produtos! Por favor tente novamente." />
  },
  {
    path: "/products",
    element: <Search />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("query");
      
      if(searchTerm)
        return getProducts(`${URI}/api/products/?query=${searchTerm}`);

      return getProducts(`${URI}/api/products`);
    },
    errorElement: <GenericErrorPage text="Ocorreu algum erro ao buscar os produtos! Por favor tente novamente." />
  },
  {
    path: "/cart",
    element: <Cart />,
    loader: async () => {
      return getCart(URI);
    },
  }
]);
