import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {
  private psj = [
    {
      id:'1',
      nombre:'Diego Concha',
      imgURL:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_1.jpg'
    },
    {
      id:'2',
      nombre:'Seba',
      imgURL:'https://cdn.mos.cms.futurecdn.net/VcYnJP9V8ALcTA4qjow6PM.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
