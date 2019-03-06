import { HeroeTrajetaComponent } from './componetes/heroe-trajeta/heroe-trajeta.component';
import { Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './componetes/home/home.component';
import { HeroesComponent } from './componetes/heroes/heroes.component';
import { AboutComponent } from './componetes/about/about.component';
import { HeroeComponent } from './componetes/heroe/heroe.component';
import { BuscarHeroeComponent } from './componetes/buscar-heroe/buscar-heroe.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:i', component: HeroeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'buscarHeroe/:termino', component: BuscarHeroeComponent },
  { path: 'tarjetaHeroe/:i', component: HeroeTrajetaComponent },
  { path: '**', pathMatch: 'full' , redirectTo : 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true} );
