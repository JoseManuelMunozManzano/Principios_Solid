(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    private type: HtmlType;

    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(public id: string, public value: string, public placeholder: string) {
      this.type = 'input';
      this.html = new HtmlElement(id, this.type);
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement('José M.', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
