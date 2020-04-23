import { KorgService } from './../../services/korg.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-publish-aux',
  templateUrl: './publish-aux.page.html',
  styleUrls: ['./publish-aux.page.scss'],
})
export class PublishAuxPage implements OnInit {

  id = null;
  publicacion: any = {};

  constructor(private route:ActivatedRoute, private _korgService: KorgService, private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('custom');
    console.log(this.id);
    this.getEspecific();
  }

  getEspecific() {
    this._korgService.especificPublish(this.id).subscribe((data: any) => {
      this.publicacion = data.publicacionEncontrada;
      console.log(this.publicacion, 'publicacion');
    });
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
}
