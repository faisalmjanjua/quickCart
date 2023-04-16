export class Products {
  id: number;

  productName: string; // Include the name of the organic oil, such as "Organic Lavender Essential Oil" or "Organic Jojoba Oil."
  certification: string; //Indicate the specific organic certification that the oil has received, such as USDA Organic or EcoCert.
  description: string;
  size: number; //Mention the volume or size of the oil, such as 4 oz or 30 ml.

  sources: string; //Indicate the source of the oil, including the plant or plants from which it was extracted and the country or region where it was grown.

  benefits: string; //Mention the potential benefits of using the oil, such as promoting relaxation, improving skin health, or supporting hair growth.

  packaging: string; //Mention the type of packaging, such as a glass bottle or plastic container.

  price: number; //Include the price of the oil and any discounts or promotions currently available.

  stock: number | string; // Availble or out of stock

  qty: number; // Quantity

  images: string;

  constructor(
    id,
    productName,
    description,
    size,
    packaging,
    price,
    stock,
    qty,
    images
  ) {
    this.id = id;
    this.productName = productName;
    this.description = description;
    this.size = size;
    this.packaging = packaging;
    this.price = price;
    this.stock = stock;
    this.qty = qty;
    this.images = images;
  }
}
