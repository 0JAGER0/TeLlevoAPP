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


  
  async actualizar(txtRut:HTMLInputElement, txtUsuario:HTMLInputElement, txtNombre:HTMLInputElement, txtTelefono:HTMLInputElement, txtCorreo:HTMLInputElement, txtConstrasenia:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    this.rut = valor[0].rut;
    this.nombre = valor[0].nombre;
    this.telefono = valor[0].telefono;
    this.correo = valor[0].correo;
    this.contrasenia = valor[0].contrasenia;


    if (txtRut.value.trim().length != 0)
    {
      this.rut  = txtRut.value;
      
    }

    if (txtNombre.value.trim().length != 0)
    {
      this.nombre  = txtNombre.value;
    }
    if (txtTelefono.value.trim().length != 0)
    {
      this.telefono  = txtTelefono.value;
    }
   
    if (txtCorreo.value.trim().length != 0)
    {
      this.correo  = txtCorreo.value;
    }
   
    if (txtConstrasenia.value.trim().length != 0)
    {
      this.contrasenia  = txtConstrasenia.value;
    }
   
   
    const datos = [{
      "rut":this.rut,
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo,
      "contrasenia":this.contrasenia
    }];

    await this.crud.agregarConKey(txtUsuario.value,datos);
    txtRut.value = "";
    txtNombre.value = "";
    txtTelefono.value = "";
    txtCorreo.value = "";
    txtUsuario.value = "";
    txtConstrasenia.value = "";

  }
  
  ngOnInit() {
  }




}
