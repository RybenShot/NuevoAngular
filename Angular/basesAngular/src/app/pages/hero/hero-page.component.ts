import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl:'./hero-page.component.css',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {

  name = signal('IronMan')
  age = signal(45)

  heroDescription = computed(() => {
    const description = `el heroe es: ${ this.name() } de edad ${ this.age() }`
    return description
  })

  capitalizeName = computed(() => this.name().toUpperCase())

  // getHeroDescription():string{
  //   return `el heroe es: ${ this.name() } de edad ${ this.age() }`;
  // }

  changeHero():void{
    this.name.set("Spiderman")
    this.age.set(22)
  }

  ressetForm():void{
    this.name.set("IronMan")
    this.age.set(45)
  }

  changeAge(newAge: number){
    this.age.update((current) => current = newAge)
  }
}
