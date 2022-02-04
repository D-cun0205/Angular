import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// ng generate module app-routing --flat --module=app
// ng generate [타입] [파일명] [옵션]...
// --flat : 새로운 폴더를 생성하지않고 파일만 생성
// --module=app : AppModule 의 imports 배열에 자동으로 등록

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
