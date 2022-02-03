import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  // ngOnInit : 인스턴스 생성 직후 실행되는 함수
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
}
