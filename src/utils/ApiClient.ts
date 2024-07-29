import axios from "axios";
import { ICartProps } from "../types/pages/ICart";
import { IProductsResponse } from "../types/pages/IRequestTypes";
import { IAddToCartParams, IDeleteItemCartParams, IGetMoreProductsParams, IUpdateItemCartParams } from "../types/components/IUtilsParams";

// product endpoints
export const getProducts = async (URL: string): Promise<IProductsResponse> => {
  const request = await axios.get(`${URL}`);
  const response = await request.data;
  
  return response;
}

export const getMoreProduct = (params: IGetMoreProductsParams) => {
  const URL = import.meta.env.VITE_DOMAIN;
  params.errorCallback(undefined);

  getProducts(`${URL}/api/products?page=${params.productPage + 1}`)
    .then((response) => {
      const currentProducts = [...params.products, ...response.products];
      params.setCallback(currentProducts);
    })
    .catch((error) => params.errorCallback(error))
}


// cart endpoints
export const getCart = async (URL: string): Promise<ICartProps> => {
  const cartID = import.meta.env.VITE_CART_ID;
  const request = await axios.get(`${URL}/api/cart/${cartID}`);
  const response = await request.data;
  
  return response;
}

export const addItemCart = async (params: IAddToCartParams): Promise<void> => {
  const URL = import.meta.env.VITE_DOMAIN;
  const cartID = import.meta.env.VITE_CART_ID;

  params.errorCallback(undefined);
  params.setCallback(true);

  axios.post(`${URL}/api/cart/${cartID}/add`, { productId: params._id, quantity: 1 })
    .then((response) => {
      if(response)
        params.setCallback(false);
    })
    .catch((error) => {
      params.setCallback(false);
      params.errorCallback(error);
    });
}

export const deleteItemCart = async (params: IDeleteItemCartParams): Promise<void> => {
  const URL = import.meta.env.VITE_DOMAIN;
  const cartID = import.meta.env.VITE_CART_ID;

  params.errorCallback(undefined);

  axios.delete(`${URL}/api/cart/${cartID}/remove/${params.itemID}`)
    .then((response) => {
      if(response.status >= 200)
        window.location.href = window.location.href;
    })
    .catch((error) => {
      params.errorCallback(error);
    });
}

export const updateItemCart = async (params: IUpdateItemCartParams): Promise<void> => {
  const URL = import.meta.env.VITE_DOMAIN;
  const cartID = import.meta.env.VITE_CART_ID;

  params.errorCallback(undefined);
  params.setCallback(true);

  axios.put(`${URL}/api/cart/${cartID}/update/${params.itemID}`, { quantity: params.quantity })
    .then((response) => {
      if(response)
        params.setCallback(false);
    })
    .catch((error) => {
      params.setCallback(false);
      params.errorCallback(error);
    });
}
