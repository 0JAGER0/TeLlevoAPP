import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {
  private cond = [
    {
      id:'1',
      nombre:'Nicolas Piña',
      imgURL:'https://www.mobachampion.com/imgs/champion/highres/veigar.jpg',
      vehiculo: ['Audi WK-WP-77']
    },
    {
      id:'2',
      nombre:'Diego Uribe',
      imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJbdiA0NUU3Nr0NEhYmF8z5rwfA-PnFXZZA&usqp=CAU',
      vehiculo:['Ferrari   TR-DB-69']
    },
    {
      id:'3',
      nombre:'Denisse Alcantara',
      imgURL:'https://www.hogarmania.com/archivos/202008/girasol-consejos-cultivo-668x400x80xX-1.jpg',
      vehiculo:['Batimovil  KL-JL-99']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
