import {Component, signal} from "@angular/core"

interface Character{
  id:number;
  name:string;
  power:number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html'
})

export class DragonballSuperPageComponent {
  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 3456},
    {id:2, name: 'Vegetta', power: 346}
  ])

  addCharacters(){
    if(this.name() || !this.power() || this.power() <= 0){
      return
    }

    const newCharacter: Character = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list) => [... list, newCharacter]);
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0)
  }

}
