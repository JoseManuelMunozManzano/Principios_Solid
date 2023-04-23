// Las clases abstractas sirven para trabajar con herencia.
export abstract class Vehicle {
  // Las clases que extiendan de mi clase abstracta deben implementar los métodos abstractor
  abstract getNumberOfSeats(): number;

  // Otra forma es, si la clase que extiende de la clase abstracta no sobreescribe el método,
  // lanza una excepción:
  //
  // getNumberOfSeats(): number {
  //   throw Error('Method not implemented');
  // }
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Volvo extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

// Ahora los nuevos vehículos funcionan
export class Ferrari extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
