import Product from "../entities/Product";

export default interface CartItemInterface {
  item: Product;
  amount: number;
}
