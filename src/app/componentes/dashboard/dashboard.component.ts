import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private _contador;

  constructor() {
    this._contador = 0;
  }

  private crearArticulo() {
    if ($('#texto').val() === '' || $('#tituloArticulo').val() === '') {
      swal({
        title: 'Error!',
        text: 'Se requiere llenar los campos para poder crear un articulo',
        type: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    this._contador++;
    const acordion = <HTMLElement> $('#contenedor-articulos')[0];

    // cabezera
    let div = document.createElement('div');
    div.className = 'card';
    const titulo = document.createElement('div');
    titulo.className = 'card-header';
    titulo.id = 'title_' + this._contador;
    const lblTitulo = document.createElement('h5');
    lblTitulo.className = 'mb-0';
    const boton = document.createElement('button');
    boton.className = 'btn btn-link collapsed';
    boton.setAttribute('data-toggle', 'collapse');
    boton.setAttribute('data-target', '#contenido_' + this._contador);
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-controls', 'contenido_' + this._contador);
    acordion.appendChild(div);
    div.appendChild(titulo);
    titulo.appendChild(lblTitulo);
    lblTitulo.appendChild(boton);
    boton.appendChild(document.createTextNode($('#tituloArticulo').val().toString()));

    // contenido
    div = document.createElement('div');
    div.id = 'contenido_' + this._contador;
    div.className = 'collapse';
    div.setAttribute('aria-labelledby', 'title_' + this._contador);
    div.setAttribute('data-parent', '#contenedor-articulos');
    const contenedorTexto = document.createElement('div');
    contenedorTexto.className = 'card-body';
    acordion.appendChild(div);
    div.appendChild(contenedorTexto);
    contenedorTexto.appendChild(document.createTextNode($('#texto').val().toString()));

    // limpieza de campos
    $('#texto').val('');
    $('#tituloArticulo').val('');
  }

  ngOnInit() {
  }

}
