import { JsonDataBaseService, LocalDataBaseService, PostProvider } from './05-dependency-c-solved';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  // Inyección de dependencia
  // Aceptando ahora distintos tipos de proveedores.
  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // Solucionado open-close
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
