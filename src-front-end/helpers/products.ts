import Product from "../entities/Product";
import ProductTypeEnum from "../enums/ProductTipeEnum";

export default function (): Array<Product> {
  let products: Array<Product> = [];

  for (let i: number = 0; i < 15; i++) {
    if (i % 3 == 0) {
      const product: Product = new Product();
      product.id = window.crypto
        .getRandomValues(new Uint32Array(1))[0]
        .toString();
      product.name = 'Smart TV Philips 50 " 4K Ultra HD 50PUD6654/77';
      product.type = ProductTypeEnum.tv;
      product.price = 79000;
      product.description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laudantium dolorem sunt error eius veritatis unde magni doloremque hic. Odio reiciendis beatae autem repellat sunt facere consequuntur fuga doloremque eius illum quidem asperiores exercitationem consequatur ipsam ducimus voluptates, excepturi mollitia! Architecto error ducimus corrupti praesentium esse. Magni iste quae molestias ipsa hic natus reprehenderit nulla voluptatum laboriosam exercitationem eos accusantium optio consectetur, facilis, deleniti voluptatibus veritatis at amet esse eligendi quaerat. Dignissimos vero beatae deleniti neque minima blanditiis sit labore est facere molestiae cum, commodi laboriosam quos itaque amet, ea odio aliquid eum similique tempora incidunt aperiam? Veniam, deleniti. Rerum est a numquam dicta porro possimus quisquam repudiandae suscipit! Temporibus nulla ex placeat sunt autem fugiat impedit asperiores, esse magni excepturi voluptates, ipsa ut possimus veniam quas architecto animi, tenetur qui quae maiores? Itaque ad molestia voluptatum iusto sapiente fuga! Quis aut, dolorem porro commodi quidem sed laboriosam perferendis maiores recusandae doloribus delectus minima vitae molestiae ab nisi inventore voluptate praesentium nulla. Deserunt est, beatae doloremque quae labore soluta similique odit accusamus! Nobis architecto autem nemo dolore nostrum quidem dolores quibusdam? Corporis, voluptates? Vero libero, quidem sit eos atque repellat non aliquam ad, consequuntur at ea omnis! Magnam ex numquam voluptatibus minima tempore doloremque perspiciatis veniam nisi nulla, possimus a unde, laborum nemo aspernatur iusto quod at? Voluptatem exercitationem debitis eum error doloremque adipisci non iste dolorem quam? Molestias animi assumenda qui.`;
      product.image = "./resources/images/smarthTV.png";
      product.thumbnail = "./resources/images/smarthTV-thumbnail.png";
      product.stock = 10;
      product.discount = 12.658;

      products.push(product);
    } else if (i % 3 == 1) {
      const product2: Product = new Product();
      product2.id = window.crypto
        .getRandomValues(new Uint32Array(1))[0]
        .toString();
      product2.name = "Lavarropas Autom??tico Samsung 9 KG WW90J5410GS.- Plata";
      product2.type = ProductTypeEnum.washingMachine;
      product2.price = 105000;
      product2.description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laudantium dolorem sunt error eius veritatis unde magni doloremque hic. Odio reiciendis beatae autem repellat sunt facere consequuntur fuga doloremque eius illum quidem asperiores exercitationem consequatur ipsam ducimus voluptates, excepturi mollitia! Architecto error ducimus corrupti praesentium esse. Magni iste quae molestias ipsa hic natus reprehenderit nulla voluptatum laboriosam exercitationem eos accusantium optio consectetur, facilis, deleniti voluptatibus veritatis at amet esse eligendi quaerat. Dignissimos vero beatae deleniti neque minima blanditiis sit labore est facere molestiae cum, commodi laboriosam quos itaque amet, ea odio aliquid eum similique tempora incidunt aperiam? Veniam, deleniti. Rerum est a numquam dicta porro possimus quisquam repudiandae suscipit! Temporibus nulla ex placeat sunt autem fugiat impedit asperiores, esse magni excepturi voluptates, ipsa ut possimus veniam quas architecto animi, tenetur qui quae maiores? Itaque ad molestia voluptatum iusto sapiente fuga! Quis aut, dolorem porro commodi quidem sed laboriosam perferendis maiores recusandae doloribus delectus minima vitae molestiae ab nisi inventore voluptate praesentium nulla. Deserunt est, beatae doloremque quae labore soluta similique odit accusamus! Nobis architecto autem nemo dolore nostrum quidem dolores quibusdam? Corporis, voluptates? Vero libero, quidem sit eos atque repellat non aliquam ad, consequuntur at ea omnis! Magnam ex numquam voluptatibus minima tempore doloremque perspiciatis veniam nisi nulla, possimus a unde, laborum nemo aspernatur iusto quod at? Voluptatem exercitationem debitis eum error doloremque adipisci non iste dolorem quam? Molestias animi assumenda qui.`;
      product2.image = "./resources/images/washing-machine.png";
      product2.thumbnail = "./resources/images/washing-machine-thumbnail.png";
      product2.stock = 15;
      product2.discount = 5;

      products.push(product2);
    } else {
      const product3: Product = new Product();
      product3.id = window.crypto
        .getRandomValues(new Uint32Array(1))[0]
        .toString();
      product3.name = "Heladera Con Freezer VONDOM HEL82BLANCA ";
      product3.type = ProductTypeEnum.fridge;
      product3.price = 105000;
      product3.description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laudantium dolorem sunt error eius veritatis unde magni doloremque hic. Odio reiciendis beatae autem repellat sunt facere consequuntur fuga doloremque eius illum quidem asperiores exercitationem consequatur ipsam ducimus voluptates, excepturi mollitia! Architecto error ducimus corrupti praesentium esse. Magni iste quae molestias ipsa hic natus reprehenderit nulla voluptatum laboriosam exercitationem eos accusantium optio consectetur, facilis, deleniti voluptatibus veritatis at amet esse eligendi quaerat. Dignissimos vero beatae deleniti neque minima blanditiis sit labore est facere molestiae cum, commodi laboriosam quos itaque amet, ea odio aliquid eum similique tempora incidunt aperiam? Veniam, deleniti. Rerum est a numquam dicta porro possimus quisquam repudiandae suscipit! Temporibus nulla ex placeat sunt autem fugiat impedit asperiores, esse magni excepturi voluptates, ipsa ut possimus veniam quas architecto animi, tenetur qui quae maiores? Itaque ad molestia voluptatum iusto sapiente fuga! Quis aut, dolorem porro commodi quidem sed laboriosam perferendis maiores recusandae doloribus delectus minima vitae molestiae ab nisi inventore voluptate praesentium nulla. Deserunt est, beatae doloremque quae labore soluta similique odit accusamus! Nobis architecto autem nemo dolore nostrum quidem dolores quibusdam? Corporis, voluptates? Vero libero, quidem sit eos atque repellat non aliquam ad, consequuntur at ea omnis! Magnam ex numquam voluptatibus minima tempore doloremque perspiciatis veniam nisi nulla, possimus a unde, laborum nemo aspernatur iusto quod at? Voluptatem exercitationem debitis eum error doloremque adipisci non iste dolorem quam? Molestias animi assumenda qui.`;
      product3.image = "./resources/images/fridge.png";
      product3.thumbnail = "./resources/images/fridge-thumbnail.png";
      product3.stock = 25;
      product3.discount = 0;

      products.push(product3);
    }
  }

  return products;
}
