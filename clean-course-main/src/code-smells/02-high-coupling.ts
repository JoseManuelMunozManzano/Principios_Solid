(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento --> Malo

  // Una modificación en Person (existía public name: string y se ha dividio en firstName y lastName)
  // hace que haya que modificarse mucho código de otras clases.
  class Person {
    constructor(public firstName: string, public lastName: string, public gender: Gender, public birthdate: Date) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'José M.',
    'Munoz',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
