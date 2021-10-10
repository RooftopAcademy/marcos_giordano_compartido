import Order from "../enums/OrderEnum";
import Product from "./Product";

export default class ProductSort {
  private result: Array<Product> = [];
  private sortingMethod: { [index: string]: any } = {};
  private cache: Map<{ [index: string]: any }, Array<Product>> = new Map();

  constructor(products: Array<Product>) {
    this.result = products;
  }

  public setSorting(sortingMethod: Object = {}) {
    this.sortingMethod = sortingMethod;

    const sortingMethodKeys: Array<keyof Product> = Object.keys(
      this.sortingMethod
    ) as Array<keyof Product>;

    sortingMethodKeys.forEach((sortType) => {
      this.result = this.SortbyKey(sortType, this.sortingMethod[sortType]);
      this.cache.set(sortingMethod, this.result);
    });
  }

  public getSorting() {
    return this.cache.get(this.sortingMethod);
  }

  public SortbyKey(key: keyof Product, order: Order) {
    if (order === Order.ASC) {
      return this.result.sort((a, b) => {
        return this.sortBy(a, b, key);
      });
    } else {
      return this.result.sort((a, b) => {
        return this.sortBy(b, a, key);
      });
    }
  }

  private sortBy(a: Product, b: Product, key: keyof Product) {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  }
}
