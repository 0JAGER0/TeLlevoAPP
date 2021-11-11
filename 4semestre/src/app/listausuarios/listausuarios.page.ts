import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.page.html',
  styleUrls: ['./listausuarios.page.scss'],
})
export class ListausuariosPage implements OnInit {
  users =[]

  constructor(private us:UsuarioService) { }

  ngOnInit() {

    this.us.cargarDatos().subscribe(data=>{
      this.users = data

    })
  }

}
