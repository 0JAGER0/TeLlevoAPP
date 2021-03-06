import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

  users =[]

  rut = "";
  usuario = "";
  nombre ="";
  telefono ="";
  correo ="";
  contrasenia ="";

  constructor(private menu: MenuController,private crud:CrudService, private toast: ToastController, private router: Router, private us:UsuarioService) { }


  async con(txtUsuario:HTMLInputElement,txtConstrasenia: HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    console.log(valor)
    if (valor != null)
    {
      if (valor[0].contraseña === txtConstrasenia.value)
      {
        this.router.navigateByUrl("/home/"+txtUsuario.value)
        const toast = await this.toast.create({
          message: 'Bienvenido',
          duration: 2000,
          color: "success", 
          position: "middle"
        })
        toast.present();
      }
      else
      {
        const toast = await this.toast.create({
          message: 'Error revise bien los datos',
          duration: 2000,
          color: "danger",
          position: "middle"
        })
        toast.present();
      }
    }
    else{

      const toast = await this.toast.create({
        message: 'no existe ese usuario',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
    }
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

  ngOnInit() {

  }
}
