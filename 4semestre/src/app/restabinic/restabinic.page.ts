import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restabinic',
  templateUrl: './restabinic.page.html',
  styleUrls: ['./restabinic.page.scss'],
})
export class RestabinicPage implements OnInit {

  Usuario ="";

  constructor(private crud:CrudService, private toast: ToastController, private router: Router) { }

  ngOnInit() {
  }


  async con(txtUsuario: HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    if (valor != null)
    {
      console.log("Datos validos")
      let url='/restablecer/'+txtUsuario.value
      this.router.navigateByUrl(url)
    }
    else{
      const toast = await this.toast.create({
        message: 'Usuario inexistente o invalido, ingreselo nuevamente',
        duration: 2000,
        color: "danger",
        position: "top"
      })
      toast.present();
    }
    }
  }



