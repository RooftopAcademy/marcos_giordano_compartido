import ProductTypeEnum from "../enums/ProductTipeEnum";

export default interface ProductSortInterface {
  id: string;
  name: string;
  price: number;
  type: ProductTypeEnum;
}
