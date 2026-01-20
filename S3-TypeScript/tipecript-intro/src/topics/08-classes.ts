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

// export class Hero extends Person{ -- Si hicieramos de esta forma, deberiamos poner el "super" para completar los valores de la clase que extendemos, pero si lo separamos todo como esta echo aqui, todo sera mas simple y legible
export class Hero {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        //super(realName, "Nueva York")
    }
}
const tony = new Person("Tony", "Canadá")
const superHeroe = new Hero("Batman", 45, "Buno Dias", tony);

console.log(superHeroe)