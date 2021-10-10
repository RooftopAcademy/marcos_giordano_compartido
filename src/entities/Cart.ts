import CartItemInterface from "../interfaces/CartItemInterface";
import Product from "./Product";
import {
  getCartItems,
  postCartItems,
  removeAllCartItems,
} from "../services/cartService";

export default class Cart {
  private _products: Array<CartItemInterface> = [];

  constructor() {
    this.load();
  }

  public showAll(): Array<CartItemInterface> {
    return this._products;
  }

  private load(): void {
    const loadData = getCartItems();
    if (loadData) {
      loadData.forEach((element) => {
        const product: Product = new Product();
        product.create(element.item);
        this._products.push({
          item: product,
          amount: element.amount,
        });
      });
    }
  }

  public getCartItemById(id: string): CartItemInterface {
    return this._products.filter((p: CartItemInterface) => p.item.id == id)[0];
  }

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
    postCartItems(this._products);
  }

  public substract(id: string): void {
    const itemSearch = this._products.filter(
      (p: CartItemInterface) => p.item.id == id
    );
    if (itemSearch.length != 0) {
      if (itemSearch[0].amount > 1) {
        itemSearch[0].amount--;
      } else {
        this._products = this._products.filter(
          (p: CartItemInterface) => p.item.id != id
        );
      }
      postCartItems(this._products);
    }
  }

  public remove(id: string): void {
    this._products = this._products.filter(
      (p: CartItemInterface) => p.item.id != id
    );
    postCartItems(this._products);
  }

  public clearAll(): void {
    this._products = [];
    removeAllCartItems();
  }
}
