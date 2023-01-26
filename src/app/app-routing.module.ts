import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrizeDrawPageComponent } from './prize-draw-page/prize-draw-page.component';

const routes: Routes = [
  { path: 'prize-draw-game', component: PrizeDrawPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
