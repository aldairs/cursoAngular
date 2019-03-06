import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-trajeta',
  templateUrl: './heroe-trajeta.component.html',
  styleUrls: ['./heroe-trajeta.component.css']
})
export class HeroeTrajetaComponent implements OnInit {

  @Input() Heroe: any = {};
  @Input() index: number;
  constructor(private routers: Router) { }

  ngOnInit() {
  }
  verHeroe(idx: number) {
    this.routers.navigate(['/heroe', this.index]);
  }

}
