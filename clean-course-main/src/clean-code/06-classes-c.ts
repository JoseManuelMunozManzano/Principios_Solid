(() => {
  console.log('PRINCIPIO DE RESPONSABILIDAD UNICA');
  // Aplicando el principio de responsabilidad única.

  // Priorizar la composición frente a la herencia!
  // A menos que sea estrictamente necesario hay que evitar usar extends, porque se añade una capa extra de
  // complejidad.

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  // Clase correcta. Se aplica principio de responsabilidad única.
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  // Eliminando herencia
  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  // Eliminando herencia
  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  // Clase de composición de otras clases.
  //
  // Se encarga de la comunicación que pueda haber entre sus propiedades, o tener métodos que requieran información
  // de las propiedades que tengamos. PERO CUIDADO, hasta donde sea posible, cada clase debería hacer sus cosas
  // de manera aislada.
  //
  // Esto es mucho más fácil de comprender y de mantener que la herencia.
  class UserSettings {
    // Cada propiedad tiene toda la información con responsabilidades únicas para manejar el usuario.
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ name, gender, birthdate, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1985-10-21'),
    email: 'fernando@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Fernando',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({ userSettings });
  console.log(userSettings.user.checkCredentials());
})();
