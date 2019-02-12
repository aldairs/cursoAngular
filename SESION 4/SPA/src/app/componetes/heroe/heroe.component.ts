import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

export interface Heroe {
  nombre: String;
  bio: String;
  img: String;
  aparicion: String;
  casa: String;
}

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  Heroes: Heroe;
  RutaCasaHeroe: string;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private routers: Router) {



    this.activatedRoute.params.subscribe(params => {
      console.log(this.Heroes = this.heroesService.geHeroe(params['i']));
    });


  }

  ngOnInit() {

    let varibleTemporal;

     varibleTemporal = this.Heroes.casa;
    console.log(varibleTemporal);

    if (varibleTemporal === 'Marvel') {
      this.RutaCasaHeroe = './../../../assets/img/marvel.png';
    } else {
      this.RutaCasaHeroe = './../../../assets/img/DC.png';
    }
  }



}


