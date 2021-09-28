import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { createAnimation } from '@ionic/core';
import { NgModule } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map = null;

  imagenes=[
    'assets/fotos_app/auto_negro.png'
  ]
  // private geolocation: Geolocation, private loadingCtrl: LoadingController
  
  constructor(private menu: MenuController, ) {}
  

  ngOnInit(){
    this.loadMap();

  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: -33.522773, lng: -70.785609};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position:{
          lat: -33.522773,
          lng: -70.785609
        },
        title: 'punto uno'
      };
      this.addMarker(marker);
    });
  }

  

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }



  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
  
  ngAfterViewInit(){
    const square = createAnimation()
    .addElement(document.querySelector('.square'))
    .duration(3000)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(80px)')
    .fromTo('opacity', '1', '0.5');
  
  const squareB = createAnimation()
    .addElement(document.querySelector('.square-b'))
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  
  
  const squareC = createAnimation()
    .addElement(document.querySelector('.square-c'))
    .duration(5000)
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(45deg)' }
    ]);
    
  const parent = createAnimation()
    .duration(2000)
    .iterations(Infinity)
    .addAnimation([square, squareB, squareC]);


    square.play();
    squareB.play();
    squareC.play();
  }

}
