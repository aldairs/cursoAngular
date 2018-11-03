import { Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './componetes/home/home.component';
import { HeroesComponent } from './componetes/heroes/heroes.component';
import { AboutComponent } from './componetes/about/about.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full' , redirectTo : 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true} );
