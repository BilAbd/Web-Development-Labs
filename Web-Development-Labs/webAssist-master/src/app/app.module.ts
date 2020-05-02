import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { CategoryComponent } from './category/category.component';
import { RoutingModule } from './routing/routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FirstcompDetailComponent } from './firstcomp-detail/firstcomp-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    CategoryComponent,
    FirstcompDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule
  ],
  providers: [CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
