function addNumbers(a:number, b:number){
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `La suma es: ${a + b}`;
}

function multiply(firstNumber:number, seccondNumber?:number, base:number = 2){
    return firstNumber * base;
}

interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount:number) => {
    character.hp += amount
}

const Aragor: Character = {
    name: "Aragor",
    hp: 50,
    showHp(){
        console.log(`${this.name} tiene ${this.hp} ptos de vida`);
    }
}

healCharacter(Aragor, 20);
Aragor.showHp();

// const result : number = addNumbers(5, 10);s
// const result2: string = addNumbersArrow(7, 3);
// const multiplyResult = multiply(5);
// console.log({result, result2, multiplyResult});



export {}