import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  frase: any = {
    mensaje: 'Mama qué, moto?',
    autor: 'Mototaxi'

  };

   Mostrar = true;

   colegas: String[] =  ['Jose' , 'Alex' , 'hader'];


}
