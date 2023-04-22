// Para ejecutar:
// node src/code-smells/01-singleton.js

// Creado en ámbito global.
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  // instance1 e instance2 siempre apuntan a la misma dirección de memoria.
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  // Con ===, los valores y el tipo deben ser iguales.
  console.log('Misma instancia? ', instance1 === instance2);
}

// Lo peor del patrón singleton es que es difícil de testear.

main();
