interface AudioPlayer {
    audioVolume: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soungDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
const song = "New song";

// Esto es destructuring
//const { song } = audioPlayer // al añadir una nueva variable llamada "song", tenemos un conflicto, de la siguiente forma solucionariamos esto
const {song: oldSong} = audioPlayer // aqui lo que hacemos es captuar la variable que buscamos de la interface y renombrarlo 
const { author } = audioPlayer.details

// ahora tenemos 2 variables "song" y "oldSong"
// console.log('the old song is:', oldSong)
// console.log('the new song is:', song)
// console.log('and the artist is:', author )

// ARRAYS

// sin destructuring
// const onePiece: string[] = ["Luffy", "Sanji", "zoro"]
// console.log("el personaje 3 es:", onePiece[2] )

// hacemos una variable directamente desde la declaracion del array, pero veo problemas a futuro con esto, no sabria exactamente como manejar los datos asi...
const [ , , Zoro ]: string[] = ["Luffy", "Sanji", "Zoro"]
console.log("el personaje 3 es:", Zoro )





export {}