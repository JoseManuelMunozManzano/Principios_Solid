(() => {
  // Principio de Segregación de Interfaz
  interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
  }

  class Tucan implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
  }

  class Hummingbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
  }

  // Violentando el principio de la segregación de interfaz
  // La interfaz me está obligando a implementar métodos que no necesita el avestruz, porque este no vuela.
  // Si en la interface Bird ahora resulta que fly() devuelve un number, está bien que toque el tucán y
  // el colibrí, pero si el avestruz no vuela, ¿Por qué tengo que tocar aquí?
  class Ostrich implements Bird {
    public fly() {
      throw new Error('Este ave no vuela');
    }
    public eat() {}
    public run() {}
  }

  // Peor todavía. El pinguino no vuela, pero nada!
  // Tendríamos que tocar la interface para añadir swim(), pero entonces tendríamos que tocar todas la clases,
  // para implementar el método swim(), cuando las demás aves que tenemos no nadan.
  class Penguin implements Bird {
    public fly() {
      throw new Error('Este ave no vuela');
    }
    public eat() {}
    public run() {}

    public swim() {}
  }

  // Para solucionar esto tenemos que segregar en diferentes interfaces las funcionalidades, de forma que cada clase
  // solo tenga que implementar lo que realmente necesita.
})();
