import Cart from "./Cart";
import Product from "./Product";
import StoreUser from "./StoreUser";
import products from "../helpers/products";

export default class Store {
  private _user?: StoreUser | undefined;
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
    let loadData: string | null = localStorage.getItem("user");
    if (loadData != null) {
      let user: StoreUser = new StoreUser();
      user.create(JSON.parse(loadData));
      this._user = user;
    }
  }

  public clearUser(): void {
    this._user = undefined;
    localStorage.removeItem("user");
  }

  public saveUser(): void {
    localStorage.setItem("user", JSON.stringify(this._user));
  }

  public loadCatalog(): void {
    let loadData: string | null = localStorage.getItem("products");
    let loadDataJson: Array<any>;
    if (loadData != null) {
      loadDataJson = JSON.parse(loadData);
    } else {
      localStorage.setItem("products", JSON.stringify(products()));
      loadData = localStorage.getItem("products")!;
      loadDataJson = JSON.parse(loadData) as Array<any>;
    }
    loadDataJson.forEach((element) => {
      let prod: Product = new Product();
      prod.create(element);
      this._catalog.push(prod);
    });
  }

  public showCatalog(): Array<Product> {
    return this._catalog;
  }

  public newProduct(prod: Product) {
    this._catalog.push(prod);
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  public getProductById(id: string) {
    let product = this.showCatalog().filter((prod: Product) => prod.id == id);
    return product;
  }

  public removeProduct(id: String) {
    let productSelected: number = this._catalog.findIndex((p) => p.id == id);
    this._catalog.splice(productSelected, 1);
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  get cart(): Cart {
    return this._cart;
  }
}
