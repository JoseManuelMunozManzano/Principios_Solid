(() => {
  // No aplicando el principio de responsabilidad única
  console.log('HERENCIA - PROBLEMATICA');

  type Gender = 'M' | 'F';

  class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date) {}
  }

  // Herencia
  class User extends Person {
    private lastAccess: Date;

    constructor(public email: string, public role: string, name: string, gender: Gender, birthdate: Date) {
      // Llamando al constructor del padre
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // Más herencia...
  // Información del usuario, como directorio en el que trabaja y última carpeta en la que el usuario trabajó.
  // Cada vez más parámetros en el constructor.
  //
  // Se violenta el principio de responsabilidad única porque HACE MUCHAS COSAS.
  // No solo hace su parte, también tiene en cuenta las propiedades del usuario y de la persona.
  // Es muy difícil mantener y saber como funciona esta clase.
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      // To-do esto es para poder cumplir con lo que necesitan las superclases
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  // Hay demasiados argumentos que proveer. Habría que trabajarlo como un objeto, pero es muy complicado de trabajar.
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'jose@yahoo.es',
    'Admin',
    'José M.',
    'M',
    new Date('1978-30-10')
  );

  console.log({ userSettings });

  // NOTA: El concepto de herencia es muy fácil de entender, pero es muy DIFICIL de mantener.
})();
