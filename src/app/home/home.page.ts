import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from './../details/details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Articles: any[];

  constructor(public navCtrl: NavController) {
    this.Articles = [
      {nom : 'Spot Led Ecomaa ER0631', prix : '39', details : 'Luminosité similaire à une lampe halogène de 50W, MR16, jusqu\'à 400'},
      {nom : 'Spot Led Ecomaa ER0633', prix : '35', details : 'Jusqu\'à 86% d\'économie d\'énergie et d\'émissions de carbone'},
      {nom : 'Fluid-O-Tech pompe PA201', prix : '77,75', details : 'Fluid-O-Tech, Pompe à Eau pour machine à Café professionnelle'},
      {nom : 'ECONOMISEUR 220V NSF Model RANCILIO 10705948', prix : '209,73', details : 'Sparepart for : Model RANCILIO 10705948'}
    ];
  }

  showDetails(): void {
    this.navCtrl.push(DetailsPage);
    // this.nav.push(DetailsPage);
  }

}
