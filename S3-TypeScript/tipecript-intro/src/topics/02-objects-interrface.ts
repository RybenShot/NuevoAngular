let skills: string[] =  ["Bash", "Counter", "Healing"]


interface Character {
    name: string;
    vida: number;
    skills: string[];
    hometown?:string;
}

const personaje: Character={
    name: "Aragorn",
    vida: 100,
    skills: ["Sword", "Leadership"],
}


personaje.hometown = "Gondor"

console.table(personaje)
export {}