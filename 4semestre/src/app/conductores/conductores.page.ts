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
      nombre:'Nicolas',
      imgURL:'https://www.mobachampion.com/imgs/champion/highres/veigar.jpg'
    },
    {
      id:'2',
      nombre:'Diego',
      imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJbdiA0NUU3Nr0NEhYmF8z5rwfA-PnFXZZA&usqp=CAU'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
