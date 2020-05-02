import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { FirstcompComponent } from '../firstcomp/firstcomp.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstcompDetailComponent } from '../firstcomp-detail/firstcomp-detail.component';

const routes: Routes = [ //Здесь сами только это пишем, остальное все так и быть должно
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id/products', component: FirstcompComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full'}, 
  //redirectTo - если ты пишешь localhost:4200/ , то он переведет тебя автоматом
  //на localhost:4200/categories, еще пример:
  //Если бы тут вместо '' в path был бы 'products', то он бы перекидывал тебя
  //на localhost:4200/categories, если бы ты написал localhost:4200/products браузере

  { path: 'categories/:id1/products/:id2', component: FirstcompDetailComponent },
  //Тут две id: id1, id2. Первая это категория, а вторая это продукт этой категорий
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
