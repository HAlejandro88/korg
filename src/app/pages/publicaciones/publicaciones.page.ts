import { KorgService } from './../../services/korg.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicaiones: any[] = [];

  noticias: any[] = [];

  constructor(private navCtrl: NavController, private _korgService: KorgService, 
              private route: Router) { }

  ngOnInit() {
    this.allPublish();
    this.allNoticies();
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


  allNoticies() {
    this._korgService.allNotices().subscribe((data: any) => {
      this.noticias = data.noticias;
      console.log(this.noticias, 'noticias');
    });
  }

  verMas(id) {
    this.route.navigate(['/publish-aux', {custom: id}]);
  }
}
