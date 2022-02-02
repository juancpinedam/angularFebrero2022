import { Component } from "@angular/core";



@Component({
    selector:'app-heroes',
    templateUrl:'heroes.component.html'
})


export class heroesComponente{

    nombre:string='IRONMAN'
    edad:number=15;


    getNombre(){
        return this.nombre+""+"-"+this.edad;
    }

    cambiarNombre(){
        this.nombre='Spiderman'
    }


    cambiarEdad(){
            this.edad = 45;
    }

}