// NOTA: Esto es una clase adaptadora que se hace para no depender altamente de una dependencia de terceros, como
//       sería axios. Hace más fácil las modificaciones.

// Vamos a remover la dependencia de axios.
// Pasos:
//    - Hacer uninstall de axios: yarn remove axios
//    - Eliminamos el import de axios.
//    - Confirmar que solo falla esta clase. Lo demås debería seguir funcionando, puesto que lo desacoplamos antes.
//    - Corregir la clase (se va a usar fetch).
//    - Confirmar que funciona igual.

export class HttpClient {
  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();

    return { data, status: resp.status };
  }
}
