export class Products {
  id: number;
  name: string; // Include the name of the organic oil, such as "Organic Lavender Essential Oil" or "Organic Jojoba Oil."
  description: string;
  size: number; //Mention the volume or size of the oil, such as 4 oz or 30 ml.
  packaging: string; //Mention the type of packaging, such as a glass bottle or plastic container.
  price: number; //Include the price of the oil and any discounts or promotions currently available.
  stock: number | string; // Availble or out of stock
  images: string;
  qty: number;

  constructor(id, name, description, size, packaging, price, stock, qty, images) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.size = size;
    this.packaging = packaging;
    this.price = price;
    this.stock = stock;
    this.qty = qty;
    this.images = images;
  }
}
