import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';


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
  constrasenia ="";
  mikey='';

  constructor(private crud:CrudService, private toast: ToastController, private ruta: ActivatedRoute, private router: Router) { }
  
  async actualizar(txtConstrasenia:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(this.mikey);
    /*Servira para guardar los datos de distintas variables dentro del storage, (sin eliminarlas)*/
    this.rut = valor[0].rut;
    this.usuario = valor[0].usuario;
    this.nombre = valor[0].nombre;
    this.telefono = valor[0].telefono;
    this.correo = valor[0].correo;
    this.constrasenia = valor[0].constrasenia;

    if (txtConstrasenia.value.trim().length != 0)
    {
      /*Si el valor de TxtContrasenia, si el campo no esta vacio, va a guardar el valor de contraseña de TxtContrasenia*/
      this.constrasenia = txtConstrasenia.value;
      this.router.navigateByUrl('/inicio')
      const toast = await this.toast.create({
        message: 'Contrasenia cambiada exitosamente, se enviara notificacion por correo',
        duration: 2000,
        color: "success",
        position: "top"
      })
      toast.present();
    }else{
      const toast = await this.toast.create({
        message: 'Complete el campo',
        duration: 2000,
        color: "danger",
        position: "top"
      })
      toast.present();
    }
   
    /*Servira para guardar las variables dentro del storage, sin eliminarlas al modificar cualquier tipo de dato*/ 
    const datos = [{
      "rut":this.rut,
      "usuario":this.usuario,
      "nombre":this.nombre,
      "telefono":this.telefono,
      "correo":this.correo,
      "constrasenia":this.constrasenia
    }];
    /*Servira para que el cambio de contrasenia funcione correctamente dentro de la promesa */
    await this.crud.agregarConKey(this.mikey,datos);
  
  }
 /*Servira para tener guardado como string lo que se mando por parámetro en la ruta*/
  ngOnInit() {
    this.ruta.paramMap.subscribe(paraMap => { this.mikey = paraMap.get('id'); }); 
  }


}