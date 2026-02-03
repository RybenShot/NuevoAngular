import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gift-list-item.html'
})
export class GiftListItemComponent {
  imageUrl = input.required<string>();
}
