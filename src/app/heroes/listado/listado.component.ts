import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {

  listadoHeroes:string[]=["ironman","superman","thor"];
  heroe:string ="";
  heroeBorrado:string="";
  hanBorrado:boolean =false;


  eliminarHeroe(pos:number){

    this.heroe =this.listadoHeroes[pos];

    this.listadoHeroes.splice(pos,1);

    let mensaje= "SE HA BORRADO A: "+this.heroe;
    this.heroeBorrado = this.heroe;
    console.log(mensaje);
    this.hanBorrado=true;
  }
  

}
