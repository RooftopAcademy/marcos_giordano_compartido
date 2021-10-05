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
    const loadData: string | null = localStorage.getItem("cartProducts");
    if (loadData) {
      const savedProducts: Array<Product> = JSON.parse(loadData);
      savedProducts.forEach((element) => {
        const product: Product = new Product();
        product.create(element);
        this._products.push(product);
      });
    }
  }

  public clear(): void {
    this._products = [];
    localStorage.removeItem("cartProducts");
  }
}
