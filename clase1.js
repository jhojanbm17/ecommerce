class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some(product => product.code === code)) {
        throw new Error("producto duplicado");
      }
      const id = ++this.lastId;
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
      return product;
    }
  }
  
  const productManager = new ProductManager();
  console.log(productManager.getProducts()); // []
  
  const producto1 = productManager.addProduct(
    "limon",
    "agrio como el corazon de tu ex",
    200,
    "no imagen",
    "152210",
    25
  );
  console.log(product1); // { id: 1, title: "limon", description: "agrio como el corazon de tu ex", precio: 200, image: "Sin imagen", code: "152210", stock: 25 }
  
  const producto2 = productManager.addProduct(
    "lulo",
    "para refrescarse el c***",
    300,
    "Sin imagen",
    "152230",
    20
  ); // Error: Duplicate product code
  
 


