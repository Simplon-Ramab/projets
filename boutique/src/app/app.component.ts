import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produits:any[]=[
  {image: 'http://kozysocks.com/1435-thickbox_default/chaussettes-rayures-fines-turquoises.jpg', prixHT: '9', nom: 'Chaussettes',quantite:0},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pulls-col-v-homme.jpg', prixHT: '39', nom: 'Pull',quantite:0},
  {image: 'https://www.modemarine.fr/upload/site0046modemarine/rubriques/rubrique-pantalon-homme.jpg', prixHT: '79', nom: 'Pantalon',quantite:0},
  {image: 'http://crossxwod.com/c/13-tm_home_default/t-shirts-debardeurs.jpg', prixHT: '19', nom: 'T-shirt', quantite:0},
  {image: 'https://www.parfuma.com/media/catalog/product/cache/3/image/800x800/9df78eab33525d08d6e5fb8d27136e95/c/a/caron_pour_un_homme.jpg', prixHT: '74', nom: 'Parfum',quantite:0},
  {image: 'http://www.bastideleconfortmedical.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/109701-lunettes-van-gogh-homme.jpg', prixHT: '139', nom: 'Lunette',quantite:0},
  {image: 'http://www.tendancevetements.com/upfiles/main/Entreprise-Loisir-Section-Verticale-Sac-%C3%80-Dos-Sacs-Bandouli%C3%A8re-Des-Sacs-Homme-Documents-Mallette-Marron-Chocolat-3032.jpg', prixHT: '64', nom: 'Sac',quantite:0},
  {image: 'http://blzjeans.com/13336-44958-thickbox/chaussures-de-ville-homme-noire-fashion-blz-jeans.jpg', prixHT: '39', nom: 'Chaussure',quantite:0},
];
  commande:any[]=[];
  total:number=0;
  panier:any[]=[];
  totaux:number=0

  ajoutProduit(index:number){
    if(this.produits[index].quantite == 0) return;
    let produit: any = Object.assign({},this.produits[index]);
    let i: number = 0;
    let produitExiste: boolean = false;
    do {
      if(this.commande[i]) {
        if(this.commande[i].nom == produit.nom){
          produitExiste = true;
          break;
        } else {
          produitExiste = false;
        }
      }
      i++;
    } while(i < this.commande.length);

    if(produitExiste){
      this.commande[i].quantite += produit.quantite;
    } else {
      this.commande.push(produit);
    }

    this.produits[index].quantite = 0;
console.log(this.commande);
  }

  Total(index:number){

    return this.commande[index].quantite*this.commande[index].prixHT;

  }

  ajout(index:number){

    this.produits[index].quantite++;
    if(this.produits[index].quantite<0){
        this.produits[index].quantite=0;
      }

    }

  deduit(index:number){
    this.produits[index].quantite--;
      if(this.produits[index].quantite<0){
      this.produits[index].quantite=0;
      }
    }

  supprimePanier(index:number)
  {this.commande.splice(index, 1);}

  supprimeCommande(index:number)
  {this.commande.splice(index);}

  calculerTotal(index:number){
    let somme =0;
    for(var i=0; i<this.commande.length;i++){
      somme+=parseInt(this.commande[i].prixHT) * parseInt(this.commande[i].quantite);
    }
    return somme;
  }
  calculerQte(index:number){
let somme =0;
for(var i=0; i<this.commande.length;i++){
  somme+=(this.commande[i].quantite);
}
return somme;
  }

}
