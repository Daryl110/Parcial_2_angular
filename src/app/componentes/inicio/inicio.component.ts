import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, DoCheck {

  public static inicioVisible;

  constructor () {
    InicioComponent.inicioVisible = true;
  }

  public get visible(): boolean {
    return InicioComponent.inicioVisible;
  }

  public set visible(value: boolean) {
    InicioComponent.inicioVisible = value;
  }

  private ocultar(): void {
    InicioComponent.inicioVisible = !InicioComponent.inicioVisible;
  }

  ngOnInit() {
    const url = window.location.href;
    if (url !== 'http://localhost:4200/') {
      InicioComponent.inicioVisible = false;
    } else {
      InicioComponent.inicioVisible = true;
    }
  }

  ngDoCheck(): void {
    const url = window.location.href;
    if (url !== 'http://localhost:4200/') {
      InicioComponent.inicioVisible = false;
    } else {
      InicioComponent.inicioVisible = true;
    }
  }

}
