import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NgModule } from '@angular/core';

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
  
  constructor(private menu: MenuController) {}
  

  ngOnInit(){
    this.loadMap();

  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: -33.522773, lng: -70.785609};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 10
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
}
