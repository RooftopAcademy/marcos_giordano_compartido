import CartItemInterface from "../interfaces/CartItemInterface";
import Product from "./Product";

export default class Cart {
  private _products: Array<CartItemInterface> = [];

  constructor() {}

  public add(product: Product): void {
    const itemSearch = this._products.filter(
      (p: CartItemInterface) => p.item.id == product.id
    );
    if (itemSearch.length === 0) {
      this._products.push({
        item: product,
        amount: 1,
      });
    } else {
      itemSearch[0].amount++;
    }
    localStorage.setItem("cartProducts", JSON.stringify(this._products));
  }

  public showAll(): Array<CartItemInterface> {
    return this._products;
  }

  public load(): void {
    const loadData: string | null = localStorage.getItem("cartProducts");
    if (loadData) {
      const savedProducts: Array<CartItemInterface> = JSON.parse(loadData);
      savedProducts.forEach((element) => {
        const product: Product = new Product();
        product.create(element.item);
        this._products.push({
          item: product,
          amount: element.amount,
        });
      });
    }
  }

  public clear(): void {
    this._products = [];
    localStorage.removeItem("cartProducts");
  }
}
