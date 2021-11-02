import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  private ser =  []
  rut = "";
  usuario = "";
  nombre ="";
  telefono ="";
  correo ="";
  contrasenia ="";
  listado = [];

  constructor(private crud:CrudService, private toast: ToastController) { }

  async agregar(txtRut:HTMLInputElement, txtUsuario:HTMLInputElement, txtNombre:HTMLInputElement, txtTelefono:HTMLInputElement, txtCorreo:HTMLInputElement, txtConstrasenia:HTMLInputElement)
  {

    if(txtRut.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El rut no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtUsuario.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El usuario no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtNombre.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El nombre no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtTelefono.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El telefono no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtCorreo.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El correo no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtConstrasenia.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'La contraseña no fue especificada',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else
    {
      const datos= [{"rut": txtRut.value,"usuario": txtUsuario.value,"nombre": txtNombre.value,"telefono": txtTelefono.value,"correo": txtCorreo.value,"contraseña": txtConstrasenia.value}];

      await this.crud.agregar(datos);

      const toast = await this.toast.create({
        message: 'Registro exitoso',
        duration: 2000,
        color: "success",
        position: "middle"
      });
      toast.present();
      txtRut.value = "";
      txtUsuario.value = "";
      txtNombre.value = "";
      txtTelefono.value = "";
      txtCorreo.value = "";
      txtConstrasenia.value = "";

    }
  

    this.nombre = "";

  }

  ngOnInit() {
  }

}
 