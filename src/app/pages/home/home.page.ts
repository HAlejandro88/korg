import { KorgService } from '../../services/korg.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ultimos: any[] = [];
  producSelect: any[] = [];

  idKorg: '5ea058a18b5f4e1fb054efda';

  korg: any = {};

  noticias: any[] = [];

  publicaciones: any[] = [];
  ultimaspublish: any[] = [];

  constructor(private navCtrl: NavController, private _korgService: KorgService) {
    this.getProducts();
    this.getKorg();
    this.getPublish();
    this.getNoticies();
  }


  goPrincipal() {
    this.navCtrl.navigateForward('/home');
  }

  goProductos() {
    this.navCtrl.navigateForward('/productos');
  }

  goPublicaciones() {
    this.navCtrl.navigateForward('/publicaciones');
  }

  goNosotros() {}

  getProducts() {
    this._korgService.allProductos().subscribe((producto: any) => {
      this.ultimos = producto.productoG;
      this.producSelect.push(this.ultimos[27]);
      this.producSelect.push(this.ultimos[28]);
      this.producSelect.push(this.ultimos[29]);
      this.producSelect.push(this.ultimos[30]);
      console.log(this.producSelect);
    });
  }

  getKorg() {
    this._korgService.getKorg('5ea058a18b5f4e1fb054efda').subscribe((data: any) => {
      this.korg = data.marcaE;
      console.log(this.korg);
    });
  }

  getPublish() {
    this._korgService.allPublish().subscribe((data: any) => {
      this.publicaciones = data.publicaciones;
      console.log(this.publicaciones, 'publish');
      this.ultimaspublish.push(this.publicaciones[0]);
      this.ultimaspublish.push(this.publicaciones[1]);
      this.ultimaspublish.push(this.publicaciones[2]);
    });
  }


  getNoticies() {
    this._korgService.allNotices().subscribe((data: any) => {
      this.noticias = data.noticias;
      console.log(this.noticias, 'noticias');
    });
  }

  enviarMail() {}


  verPublicacion() {}

}
