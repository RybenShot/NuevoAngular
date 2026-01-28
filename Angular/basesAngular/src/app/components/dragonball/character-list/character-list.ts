import type { Character } from './../../../interfaces/character.interface';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'appdragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {

  characters = input.required<Character[]>()

}
