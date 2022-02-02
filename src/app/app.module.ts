import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contadorComponente } from './contador/contador.component';
import { heroesComponente } from './heroes/heroes.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/listado/heroes.module';

@NgModule({
  declarations: [
    AppComponent, 
    contadorComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
