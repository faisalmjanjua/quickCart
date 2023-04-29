export class CartItem {
  id: number;
  productId: number;
  name: string; // Include the name of the organic oil, such as "Organic Lavender Essential Oil" or "Organic Jojoba Oil."
  description: string;
  size: number; //Mention the volume or size of the oil, such as 4 oz or 30 ml.
  packaging: string; //Mention the type of packaging, such as a glass bottle or plastic container.
  price: number; //Include the price of the oil and any discounts or promotions currently available.
  stock: number | string; // Availble or out of stock
  images: string;
  qty: number;

  constructor(id, product: Products) {
    this.id = id;
    this.productId = product.id;
    this.name = product.name;
    this.description = product.description;
    this.size = product.size;
    this.packaging = product.packaging;
    this.price = product.price;
    this.stock = product.stock;
    this.qty = product.qty;
    this.images = product.images;
  }
}
