import Order from "../enums/OrderEnum";
import ProductSortInterface from "../interfaces/ProductSortInterface";
import Product from "./Product";

export default class ProductSort {
  private input: Array<ProductSortInterface> = [];
  private result: Array<Product> = [];
  private sortingMethod: { [index: string]: any } = {};
  private cache: Map<{ [index: string]: any }, Array<Product>> = new Map();

  constructor(products: Array<Product>) {
    this.input = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.getPriceWithDiscount(),
        type: product.type,
      };
    });
    this.result = products;
  }

  public setSorting(sortingMethod: Object = {}) {
    this.sortingMethod = sortingMethod;

    const sortingMethodKeys: Array<keyof ProductSortInterface> = Object.keys(
      this.sortingMethod
    ) as Array<keyof ProductSortInterface>;

    sortingMethodKeys.forEach((sortType) => {
      this.input = this.SortbyKey(sortType, this.sortingMethod[sortType]);

      const orderProductsAccordingToInput: Array<Product> = [];
      this.input.forEach((orderedProduct) => {
        orderProductsAccordingToInput.push(
          [...this.result].filter((product) => {
            return product.id == orderedProduct.id;
          })[0]
        );
      });

      this.result = orderProductsAccordingToInput;
      this.cache.set(sortingMethod, this.result);
    });
  }

  public getSorting() {
    return this.cache.get(this.sortingMethod);
  }

  public SortbyKey(key: keyof ProductSortInterface, order: Order) {
    if (order === Order.ASC) {
      return this.input.sort((a, b) => {
        return this.sortBy(a, b, key);
      });
    } else {
      return this.input.sort((a, b) => {
        return this.sortBy(b, a, key);
      });
    }
  }

  private sortBy(
    a: ProductSortInterface,
    b: ProductSortInterface,
    key: keyof ProductSortInterface
  ) {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  }
}
