export interface IProductProps {
  _id: string,
  name: string,
  price: number,
  offer: number,
  stockQuantity: number,
  rate: number,
  image: string,
  description: string,
}

export interface IProductCartProps {
  id: string,
  image: string,
  name: string,
  price: number,
  quantity: number,
}
