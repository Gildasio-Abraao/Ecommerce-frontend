import { IProductProps } from "../components/IProductProps";

export interface IDeleteParams {
  id: string,
}

export interface IProductsResponse {
  currentPage: number,
  products: IProductProps[],
  total: number,
  totalPages: number,
}
