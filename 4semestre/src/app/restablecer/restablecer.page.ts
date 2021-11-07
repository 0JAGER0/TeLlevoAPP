import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  rut = "";
  usuario = "";
  nombre ="";
  telefono ="";
  correo ="";
  contrasenia ="";

  constructor(private crud:CrudService, private toast: ToastController) { }

  ngOnInit() {
  }

}
