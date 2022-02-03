import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input 데코레이터 : 외부의 컴포넌트에 값을 가져오기 위해 사용
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
