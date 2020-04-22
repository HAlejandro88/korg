import { KorgService } from './../../services/korg.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicaiones: any[] = [];

  constructor(private navCtrl: NavController, private _korgService: KorgService) { }

  ngOnInit() {
    this.allPublish();
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


  allPublish() {
    this._korgService.allPublish().subscribe((data: any) => {
      this.publicaiones = data.publicaciones;
      console.log(this.publicaiones);
    });
  }
}
