(() => {
  interface Product {
    id: number;
    name: string;
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    //? Esto se va a usar desde muchos sitios de la app, por lo que la codificación
    //? debería ser independiente al bloc, estar en un servicio.
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    //? Como se guarde en BD no le importa a nuestro Bloc.
    //? Vuelve a ser un servicio del producto.
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log('Guardando en base de datos', product);
    }

    //? Tampoco la codificación de este método debería estar en ProductBloc.
    notifyClients() {
      console.log('Enviando correo a los clientes');
    }

    //? Este método, directamente, no debería estar aquí.
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  const productBloc = new ProductBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  productBloc.onAddToCart(10);
})();
