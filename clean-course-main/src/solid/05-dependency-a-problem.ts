import { PostService } from './05-dependency-b-problem';

// Main
(async () => {
  const postService = new PostService();

  // Debería ser capaz de mandar cual es mi proveedor de los posts, y para mi clase PostService esto
  // debería ser transparente.
  const posts = await postService.getPosts();

  console.log({ posts });
})();
