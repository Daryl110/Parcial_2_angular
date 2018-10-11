import { Component, OnInit } from '@angular/core';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private mostrarInicio() {
    InicioComponent.inicioVisible = true;
  }

  ngOnInit() {
  }

}
