import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: String;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {


  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(this._heroesService.buscarHeroe(params['termino']));
      this.heroes = this._heroesService.buscarHeroe(params['termino']);

      this.termino = params['termino'];


    });

  }

}

