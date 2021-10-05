import Cart from "./Cart";
import Product from "./Product";
import StoreUser from "./StoreUser";
import products from "../helpers/products";
import NullProduct from "./NullProduct";
import NullStoreUser from "./NullStoreUser";

export default class Store {
  private _user?: StoreUser;
  private _catalog: Array<Product> = [];
  private _cart: Cart = new Cart();

  constructor() {}

  public get user() {
    return this._user!;
  }

  public set user(user: StoreUser) {
    this._user = user;
    this.saveUser();
  }

  public loadUser() {
    const loadData: string | null = localStorage.getItem("user");
    if (loadData) {
      const user: StoreUser = new StoreUser();
      user.create(JSON.parse(loadData));
      this._user = user;
    } else {
      this._user = new NullStoreUser();
    }
  }

  public clearUser(): void {
    this._user = new NullStoreUser();
    localStorage.removeItem("user");
  }

  public saveUser(): void {
    localStorage.setItem("user", JSON.stringify(this._user));
  }

  public loadCatalog(): void {
    let loadData: string | null = localStorage.getItem("products");
    let loadDataJson: Array<any>;
    if (loadData) {
      loadDataJson = JSON.parse(loadData);
    } else {
      localStorage.setItem("products", JSON.stringify(products()));
      loadData = localStorage.getItem("products")!;
      loadDataJson = JSON.parse(loadData) as Array<any>;
    }
    loadDataJson.forEach((element) => {
      const prod: Product = new Product();
      prod.create(element);
      this._catalog.push(prod);
    });
  }

  public showCatalog(): Array<Product> {
    return this._catalog;
  }

  public newProduct(prod: Product): void {
    this._catalog.push(prod);
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  public getProductById(id: string): Product {
    let product: Product = this.showCatalog().filter(
      (prod: Product) => prod.id == id
    )[0];
    id && product ? product : (product = new NullProduct());
    return product;
  }

  public removeProduct(id: String) {
    const productIndex: number = this._catalog.findIndex((p) => p.id == id);
    productIndex != -1 ? this._catalog.splice(productIndex, 1) : null;
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  get cart(): Cart {
    return this._cart;
  }
}
