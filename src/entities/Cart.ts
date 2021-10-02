import Product from "./Product";

export default class Cart {
  private _products: Array<Product> = [];

  constructor() {}

  public add(product: Product): void {
    this._products.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(this._products));
  }
  public showAll(): Array<Product> {
    return this._products;
  }
  public load(): void {
    let loadData: string | null = localStorage.getItem("cartProducts");
    if (loadData != null) {
      let savedProducts: Array<Product> = JSON.parse(loadData);
      savedProducts.forEach((element) => {
        let prod: Product = new Product();
        prod.create(element);
        this._products.push(prod);
      });
    }
  }
  public clear(): void {
    this._products = [];
    localStorage.removeItem("cartProducts");
  }
}
