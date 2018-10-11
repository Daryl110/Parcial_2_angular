import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as types from './../../typings';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modulos
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// componentes prime
import { ButtonModule } from 'primeng/primeng';
import { ScrollPanelModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';

// componentes angular
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { SignupComponent } from './componentes/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollPanelModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
