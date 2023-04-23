import { PostService } from './05-dependency-b-solved';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c-solved';

// Main
(async () => {
  // Inyectando la dependencia al servicio.
  // Puedo inyectar LocalDataBaseService o JsonDataBaseService o WebApiPostService.
  //
  // Al hacer los cambios en los ficheros b y c ya funciona aquí sin tener que tocar nada más.
  // Esto es porque se ha aplicado la inversión de dependencias y ahora además se puede aplicar Liskov.

  //const provider = new LocalDataBaseService();
  //const provider = new JsonDataBaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
