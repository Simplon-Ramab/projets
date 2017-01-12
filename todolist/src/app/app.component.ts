import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LISTE DES TACHES';
  texte:string;
  taches :any[]=[
    {texte:'pomme', fait:false},
    {texte:'poire', fait:false},
];
//rajouter la fonction pour pusher les eleements dans tableau ne pas oublier le typage dans les parametres
  ajoutListe(nouvelleTache:string){
    this.taches.push({texte:nouvelleTache, fait:false});
    this.texte="";
  }
// pour barrer et enlever la barre on fait une condition en jonglant avec true et false
  barrerListe(index:number){
    this.taches[index].fait=(this.taches[index].fait==true ? this.taches[index].fait=false : this.taches[index].fait=true);
 }
 supprimeListe(){
   
 }
}
