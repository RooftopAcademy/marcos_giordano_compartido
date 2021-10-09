import Cart from "./Cart";
import Product from "./Product";
import StoreUser from "./StoreUser";
import products from "../helpers/products";
import NullProduct from "./NullProduct";
import NullStoreUser from "./NullStoreUser";
import ProductSort from "./ProductSort";

export default class Store extends ProductSort {
  private _users: Array<StoreUser> = [];
  private _user: StoreUser = new NullStoreUser();
  private _catalog: Array<Product> = [];
  private _cart: Cart = new Cart();

  constructor() {
    super();
    this.loadCatalog();
    this.loadUsers();
    this.result = [...this._catalog];
  }

  //Users
  private loadUsers() {
    const loadData: string | null = localStorage.getItem("users");
    let loadDataJson: Array<any>;
    if (loadData) {
      loadDataJson = JSON.parse(loadData);
      loadDataJson.forEach((element) => {
        const user: StoreUser = new StoreUser();
        user.create(element);
        this._users.push(user);
      });
    }
  }

  //Loged user
  public get user() {
    return this._user;
  }

  public set user(user: StoreUser) {
    this._user = user;
    localStorage.setItem("user", JSON.stringify(this._user));
  }

  public registerUser(user: StoreUser) {
    const existUser = this.verifyUserExists(user.mailAdress);
    if (existUser.length == 0) {
      this._user = user;
      localStorage.setItem("user", JSON.stringify(this._user));
      this._users.push(this._user);
      localStorage.setItem("users", JSON.stringify(this._users));
    } else {
      throw new Error("El usuario que está intentando crear ya existe.");
    }
  }

  public verifyUserExists(userMail: string) {
    return this._users.filter((userEl) => userEl.mailAdress == userMail);
  }

  public getLogedUser() {
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
    localStorage.setItem("users", JSON.stringify(this._users));
  }

  //Catalog

  private loadCatalog(): void {
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

  public filterCatalog(text: string): Array<Product> {
    const filteredProducts = this._catalog.filter(
      (product) =>
        product.name.toLowerCase().includes(text.trim().toLowerCase()) ||
        product.type.toLowerCase().includes(text.trim().toLowerCase())
    );
    return filteredProducts;
  }

  //Products

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

  public editProduct(): void {
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  public removeProduct(id: String) {
    const productIndex: number = this._catalog.findIndex((p) => p.id == id);
    productIndex != -1 ? this._catalog.splice(productIndex, 1) : null;
    localStorage.setItem("products", JSON.stringify(this._catalog));
  }

  //Cart

  get cart(): Cart {
    return this._cart;
  }
}
