import { KorgService } from './../../services/korg.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-aux',
  templateUrl: './product-aux.page.html',
  styleUrls: ['./product-aux.page.scss'],
})
export class ProductAuxPage implements OnInit {

  idProducto = null;
  producto: any = {};

  constructor(private route: ActivatedRoute, private _korgService: KorgService) { }

  ngOnInit() {
    this.idProducto = this.route.snapshot.paramMap.get('custom_id');
    this._especificProduct();
  }

  _especificProduct() {
    this._korgService.especigicProduct(this.idProducto).subscribe((data: any) => {
      this.producto = data.productoE;
      console.log(this.producto);
    });
  }

}
