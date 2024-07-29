import { Dispatch, SetStateAction } from "react";
import { IProductProps } from "./IProductProps";

export interface IGetMoreProductsParams {
  productPage: number,
  products: IProductProps[],
  errorCallback: Dispatch<SetStateAction<Error | undefined>>,
  setCallback: Dispatch<SetStateAction<IProductProps[]>>,
}

export interface IAddToCartParams {
  _id: string,
  errorCallback: Dispatch<SetStateAction<Error | undefined>>,
  setCallback: Dispatch<SetStateAction<Boolean>>,
}

export interface IDeleteItemCartParams {
  itemID: string,
  errorCallback: Dispatch<SetStateAction<Error | undefined>>,
}

export interface IUpdateItemCartParams {
  itemID: string,
  quantity: number,
  errorCallback: Dispatch<SetStateAction<Error | undefined>>,
  setCallback: Dispatch<SetStateAction<Boolean>>,
}
