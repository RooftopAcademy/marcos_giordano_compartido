import Product from "../entities/Product";
import products from "../helpers/products";

export function loadCatalog(): Array<Product> {
  let loadData: string | null = localStorage.getItem("products");
  let loadDataJson: Array<any>;
  if (loadData) {
    loadDataJson = JSON.parse(loadData);
  } else {
    localStorage.setItem("products", JSON.stringify(products()));
    loadData = localStorage.getItem("products")!;
    loadDataJson = JSON.parse(loadData) as Array<any>;
  }
  const catalog: Array<Product> = [];
  loadDataJson.forEach((element) => {
    const prod: Product = new Product();
    prod.create(element);
    catalog.push(prod);
  });
  return catalog;
}

export function postCatalog(catalog: Array<Product>) {
  localStorage.setItem("products", JSON.stringify(catalog));
}
