import { IProductProps } from "../components/IProductProps";

export interface ICartProps {
  productId: IProductProps,
  quantity: number,
  _id: string,
}

export interface ICartResponse {
  discount: number,
  items: ICartProps[],
  shipping: number,
  subtotal: number,
  total: number,
  _id: string,
}
