import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Mes projets de voyage';
  texte:string;
  paysSouhait:string[]=["Irlande"];
faitPays:string[]=[];
  //ajouter un pays dans la liste avec le binding bidirectionnel
ajoutPays(choix:string){
  this.paysSouhait.push(choix);
  this.texte="";
  console.log(this.paysSouhait)
    }
visite(index:number){
let Pays:string=this.paysSouhait[index];
this.faitPays.push(Pays);
 this.paysSouhait.splice(index, 1);
  console.log(Pays)
    }
initial(index:number){
let pays:string=this.faitPays[index];
  this.paysSouhait.push(pays);
 this.faitPays.splice(index, 1);
 console.log(pays);
}
}
  //ajouter pays dans je veux y aller


  //remmettre pays dans je veux y'aller à visiter
