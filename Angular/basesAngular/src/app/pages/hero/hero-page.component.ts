import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl:'./hero-page.component.css'
})

export class HeroPageComponent {

  name = signal('IronMan')
  age = signal(45)

  getHeroDescription():void{
    return console.log(`el heroe es: ${ this.name() } de edad ${ this.age() }`);
  }

  changeHero():void{
    this.name.update((current) => current = "Spiderman")
    this.age.update((current) => current = 22)
  }

  ressetForm():void{
    this.name.update((current) => current = "IronMan")
    this.age.update((current) => current = 45)
  }

  changeAge(newAge: number){
    this.age.update((current) => current = newAge)
  }
}
