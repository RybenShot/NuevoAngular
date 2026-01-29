import type { Character } from './../../../interfaces/character.interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'appdragonball-character-list',
  templateUrl: './character-list.html',
})

export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
