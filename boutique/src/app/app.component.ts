import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produits:any[]=[
  {image: 'http://bi2.cdscdn.com/GoSport/pdt2/9/8/7/1/200x200/mpgs2138987/rw/chaussettes-candy-cane-sock-dk-vlt-x2.jpg', prixHT: '9€', nom: 'Chaussettes'},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pulls-col-v-homme.jpg', prixHT: '39€', nom: 'Pull'},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pantalon-homme.jpg', prixHT: '79€', nom: 'Pantalon'},
  {image: 'http://crossxwod.com/c/13-tm_home_default/t-shirts-debardeurs.jpg', prixHT: '19€', nom: 'T-shirt'},
];

}
