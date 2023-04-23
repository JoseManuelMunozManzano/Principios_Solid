import { PostService } from './05-dependency-b-solved';
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-c-solved';

// Main
(async () => {
  // Inyectando la dependencia al servicio.
  // Puedo inyectar LocalDataBaseService o JsonDataBaseService.
  //
  // Pero para que funcione, PostService tiene que permitir los dos, y el tema de los tipos puede ser complicado.
  // Para resolver el problema va a hacer falta el principio de inversión de dependencias.
  // Tenemos que basar nuestro código en abstracciones en vez de implementaciones.
  const provider = new LocalDataBaseService();
  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
