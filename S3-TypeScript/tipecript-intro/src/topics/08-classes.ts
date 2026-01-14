export class Person {
    // manera antigua
    //  public name: string;
    //  private address: string;

    //  constructor(){
    //     this.name = "Anonymous";
    //     this.address = "sin direccion"
    //  }

    // MANERA EFICAZ!
    constructor(
        public name: string ,
        private address: string = "sin direccion"
    ) {}
}

const superHeroe = new Person("Batman");

console.log(superHeroe)