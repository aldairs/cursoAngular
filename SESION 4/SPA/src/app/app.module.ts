import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componetes/shared/navbar/navbar.component';
import { HomeComponent } from './componetes/home/home.component';
import { AboutComponent } from './componetes/about/about.component';
import { HeroesComponent } from './componetes/heroes/heroes.component';


import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './componetes/heroe/heroe.component';
import { BuscarHeroeComponent } from './componetes/buscar-heroe/buscar-heroe.component';
import { HeroeTrajetaComponent } from './componetes/heroe-trajeta/heroe-trajeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    HeroeTrajetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
