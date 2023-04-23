// Hay que agregar la dependencia de axios ```yarn add axios```
import axios from 'axios';

// Problemas: Fuerte dependencia a axios. Hay que desacoplarlo.
//                Si algo cambia, por ejemplo, get por getTo, tenemos que entrar a cambiarlo.
//                Si queremos usar fetchApi hay que cambiarlo entero.
//            Si cambia la url hay que entrar aquí a cambiarla.

export class TodoService {
  async getTodoItems() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
  }
}

export class PostService {
  async getPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}

export class PhotosService {
  async getPhotos() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }
}
