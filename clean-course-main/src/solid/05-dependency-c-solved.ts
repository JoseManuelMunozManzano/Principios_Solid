import localPosts from '../data/local-database.json';

// Esto es una implementación, no una abstracción
export class LocalDataBaseService {
  async getFakePosts() {
    return [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
  }
}

// Nos creamos otro proveedor.
// Esto es una implementación, no una abstracción
// La idea es que el del backend nos da un JSON con data más o menos real para trabajar.
//
// Ahora vamos a usar JsonDataBaseService en vez de LocalDataBaseService y no debería ser ningún problema.
// Se usa inyección de dependencias.
export class JsonDataBaseService {
  async getPosts() {
    return localPosts;
  }
}

// FALTAN ABSTRACCIONES!!!!
