type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(public name: string = '', public price: number = 0, public size: Size = '') {}

  isProductReady(): boolean {
    // Usando DRY
    // Servirá para todos los tipos de datos.
    // El this hace referencia a la clase y las keys son las propiedades del constructor.
    for (const key in this) {
      //console.log(key, typeof this[key]);
      switch (typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not supported`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue pants', 10, 'S');
  console.log(bluePants.toString());
})();
