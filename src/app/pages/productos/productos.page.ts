import { KorgService } from './../../services/korg.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any[] = [];
  teclados: any[] = [];

  constructor(private _korgDervice: KorgService, private navCtrl: NavController) { }

  ngOnInit() {
    this.allProductsKorg();
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


  allProductsKorg() {
    this._korgDervice.allProductos().subscribe((producto: any) => {
      this.productos = producto.productoG;
      console.log(this.productos);
      this.teclados.push(this.productos[23]);
      this.teclados.push(this.productos[24]);
      this.teclados.push(this.productos[25]);
      this.teclados.push(this.productos[26]);
      this.teclados.push(this.productos[27]);
      this.teclados.push(this.productos[28]);
      this.teclados.push(this.productos[29]);
      this.teclados.push(this.productos[30]);
    });
  }

}
