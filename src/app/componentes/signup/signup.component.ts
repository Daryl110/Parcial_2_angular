import { Component, OnInit } from '@angular/core';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  nombreUsu = new FormControl('', [Validators.required]);
  contrasena = new FormControl('', [Validators.required]);

  constructor() { }

  getEmailErrorMessage() {
    console.log(this.email);
    return this.email.hasError('required') ? 'Debe ingresar un email' :
        this.email.hasError('email') ? 'El email no es valido' :
            '';
  }

  getNombreUsuErrorMessage() {
    console.log(this.nombreUsu);
    return this.nombreUsu.hasError('required') ? 'Debe ingresar un nombre de usuario' : '';
  }

  getContrasenaErrorMessage() {
    console.log(this.contrasena);
    return this.contrasena.hasError('required') ? 'Debe ingresar una contraseña' : '';
  }

  private mostrarInicio() {
    InicioComponent.inicioVisible = true;
  }

  ngOnInit() {
  }

}
