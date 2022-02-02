import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    templateUrl:'contador.component.html'
})



export class contadorComponente{
    title = 'bases';
    numero:number=10;
    base:number=5;
    sumar(num:number){
      this.numero=this.numero+num;
    }
    restar(num:number){
      this.numero=this.numero-num;
    }

}