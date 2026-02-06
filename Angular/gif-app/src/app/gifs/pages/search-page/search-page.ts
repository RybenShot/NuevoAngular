import {Component, inject, signal } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.html'
})
export default class SearchPage {
  gifService = inject(GifService)
  gifs = signal<Gif[]>([])

  onSearch(query:string){
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp)
    })
  }
 }
