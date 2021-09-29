import { Component, AfterViewInit} from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage {

  constructor(private animationCtrl: AnimationController) { 
  }

  ngAfterViewInit() {

  const Firstsquare = this.animationCtrl
  .create()
  .addElement(document.querySelector('.Firstsquare'))
  .duration(1600)
  .iterations(0.86)
  .fromTo('transform', 'translateX(0px)', 'translateX(110px)')
  .fromTo('opacity', '0.1', '3');


  const square2do = this.animationCtrl
  .create()
  .addElement(document.querySelector('.square2do'))
  .duration(1600)
  .iterations(0.86)
  .fromTo('transform', 'translateX(0px)', 'translateX(110px)')
  .fromTo('opacity', '0.1', '3');
    
  Firstsquare.play(
    )

    square2do.play(
      )

  }

}
