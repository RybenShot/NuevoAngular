import {Component, signal} from "@angular/core"
import { intervalProvider } from "rxjs/internal/scheduler/intervalProvider"

interface Character{
  id:number;
  name:string;
  power:number;
}

@Component({
  templateUrl: './dragonball-page.component.html'
})

export class DragonballPageComponent {

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 3456}

  ])

}
