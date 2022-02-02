import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado.component';
import { heroesComponente } from '../heroes.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        ListadoComponent,
        heroesComponente
    ],
    exports:[ListadoComponent]
    ,imports:[CommonModule]
})

export class HeroesModule{

}