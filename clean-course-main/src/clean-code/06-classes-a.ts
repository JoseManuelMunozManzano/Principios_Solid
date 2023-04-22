(() => {
  console.log('BREVE INTRODUCCION A LAS CLASES EN TYPESCRIPT');

  type Gender = 'M' | 'F';

  //Forma larga de crear clases
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  const newPerson = new Person('José M.', 'M', new Date('1978-30-10'));
  console.log({ newPerson });
})();
