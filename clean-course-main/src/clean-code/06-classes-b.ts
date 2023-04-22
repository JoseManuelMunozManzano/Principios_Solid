(() => {
  // No aplicando el principio de responsabilidad única
  console.log('OBJETOS COMO PROPIEDADES');

  type Gender = 'M' | 'F';

  // Aunque no se recomienda usar abreviaturas, Props es bastante usado.
  // También valdría PersonProperties
  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  // La clase Person queda muy clara
  class Person {
    // Se suelen ordenar las propiedades de forma descendente, para entontrar las propiedades fácilmente.
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // Herencia

  interface UserProps {
    email: string;
    person: PersonProps;
    role: string;
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, person }: UserProps) {
      // Llamando al constructor del padre
      super(person);
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
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
  interface UserSettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
    user: UserProps;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenFolder, // To-do esto es para poder cumplir con lo que necesitan las superclases
      user,
    }: UserSettingsProps) {
      super(user);
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  // Hay demasiados argumentos que proveer. Habría que trabajarlo como un objeto, pero es muy complicado de trabajar.
  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    user: {
      email: 'jose@yahoo.es',
      role: 'Admin',
      person: {
        name: 'José M.',
        gender: 'M',
        birthdate: new Date('1978-30-10'),
      },
    },
  });

  console.log({ userSettings });

  // NOTA: El concepto de herencia es muy fácil de entender, pero es muy DIFICIL de mantener.
})();
