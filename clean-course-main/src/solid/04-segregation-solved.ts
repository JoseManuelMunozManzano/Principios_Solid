(() => {
  // Principio de Segregación de Interfaz
  // Resolver el problema que teníamos deja el código más tolearante a cambios. Si ahora fly() retorna number no
  // tenemos que tocar todas las clases.
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmerBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
  }

  class Hummingbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
  }

  class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
  }

  class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
  }
})();
