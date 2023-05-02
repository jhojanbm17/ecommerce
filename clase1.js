class ProductManager {
    constructor() {
      this.products = [];
      this.lastId = 0;
    }
  
    getProducts() {
      return this.products;
    }
    
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
          throw new Error("producto no encontrado");
        }
        return product;
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
    updateProduct(id, updates) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
          throw new Error("prodcuto no encontado");
        }
        const product = this.products[productIndex];
        if ("id" in updates) {
          delete updates.id;
        }
        Object.assign(product, updates);
        return product;
      }
      deleteProduct(id) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
          throw new Error("producto no encontrado");
        }
        const product = this.products[productIndex];
        this.products.splice(productIndex, 1);
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
  const products = productManager.getProducts();
  console.log(products); // { id: 1, title: "limon", description: "agrio como el corazon de tu ex", precio: 200, image: "Sin imagen", code: "152210", stock: 25 }
  
  const productById = productManager.getProductById(1);
  console.log(productById); // { id: 1, title: "limon", description: "agrio como el corazon de tu ex", precio: 200, image: "Sin imagen", code: "152210", stock: 25 }
  
  const updatedProduct = productManager.updateProduct(1, { title: "producto actualizado" });
  console.log(updatedProduct); // { id: 1, title: "limon", description: "agrio como el corazon de tu ex", precio: 200, image: "Sin imagen", code: "152210", stock: 25 }
  
  const deletedProduct = productManager.deleteProduct(1);
  console.log(deletedProduct); // { id: 1, title: "limon", description: "agrio como el corazon de tu ex", precio: 200, image: "Sin imagen", code: "152210", stock: 25 }
  
  const productsAfterDelete = productManager.getProducts();
  console.log(productsAfterDelete); // []
  const producto2 = productManager.addProduct(
    "lulo",
    "para refrescarse el c***",
    300,
    "Sin imagen",
    "152230",
    20
  ); // Error: Duplicate product code
  
 


