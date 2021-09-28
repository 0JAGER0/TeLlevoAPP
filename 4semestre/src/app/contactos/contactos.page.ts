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

  const square = this.animationCtrl
  .create()
  .addElement(document.querySelector('.square'))
  .duration(1600)
  .iterations(0.86)
  .fromTo('transform', 'translateX(0px)', 'translateX(97px)')
  .fromTo('opacity', '0.1', '2');

  const squareb = this.animationCtrl
  .create()
  .addElement(document.querySelector('.squareb'))
  .duration(1600)
  .iterations(0.86)
  .fromTo('transform', 'translateX(0px)', 'translateX(97px)')
  .fromTo('opacity', '0.1', '2');
    
    square.play(
    )
    squareb.play(
      )
  }

}
