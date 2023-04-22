(() => {
  console.log('BREVE INTRODUCCION A LAS CLASES EN TYPESCRIPT');

  type Gender = 'M' | 'F';

  //Forma corta de crear clases
  class Person {
    constructor(public name: string, public gender: Gender, public birthdate: Date) {}
  }

  const newPerson = new Person('José M.', 'M', new Date('1978-30-10'));
  console.log({ newPerson });
})();
