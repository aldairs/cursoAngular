import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

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

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService  ) { 

    this.activatedRoute.params.subscribe(params => {
     console.log( this.Heroes =  this.heroesService.geHeroe(params['i']));
    });
  }

  ngOnInit() {
  }



}


