import { LocalDataBaseService } from './05-dependency-c-problem';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

// No es nada fácil usar Liskov
export class PostService {
  private posts: Post[] = [];

  constructor() {}

  async getPosts() {
    // Dependencia oculta.
    // Problemas de open-close si cambia el proveedor.
    const jsonDB = new LocalDataBaseService();
    this.posts = await jsonDB.getFakePosts();

    return this.posts;
  }
}
