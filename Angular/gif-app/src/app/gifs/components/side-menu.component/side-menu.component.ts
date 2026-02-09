import { Component } from '@angular/core';
import SideMenuHeatherComponent from '../gifs-side-menu-heather/gifs-side-menu-heather';
import { SideMenuOptionsComponent } from '../gift-side-menu-options/gift-side-menu-options';

@Component({
  selector: 'gift-side-menu',
  imports: [
        SideMenuHeatherComponent,
        SideMenuOptionsComponent
  ],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

}
