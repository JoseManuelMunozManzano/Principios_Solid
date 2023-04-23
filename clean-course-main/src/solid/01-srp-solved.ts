(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Centralización de peticiones
  // Responsabilidad Unica
  class ProductService {
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }
  }

  // Envío de correos
  // Responsabilidad Unica
  class Mailer {
    private masterEmail: string = 'a@hotmail.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo a los clientes', template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['eduardo@google.com'], 'to-clients');
    }
  }

  // Añadir al carrito
  // Responsabilidad Unica
  class CartBloc {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  // Inyectando dependencias
  // Al hacer el testeo se podrá hacer un mock de product service y otro mock de mailer.
  // No se prueba que realmente se cargue el producto, si no que loadProduct funcione bien.
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
