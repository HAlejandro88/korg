import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class KorgService {

  constructor(private http: HttpClient) { }

  getKorg(id) {
    return this.http.get(`http://localhost:3000/marcas/${id}`);
  }

  especigicProduct(id) {
    return this.http.get(`${URL}/productos/${id}`);
  }

  allProductos() {
    return this.http.get(`http://localhost:3000/productos`);
  }

  allPublish() {
    return this.http.get(`${URL}/publicaciones`);
  }


  allNotices() {
    return this.http.get(`${URL}/noticias`);
  }

  especificNoticie(id) {
    return this.http.get(`${URL}/noticias/${id}`);
  }

  especificPublish(id) {
    return this.http.get(`${URL}/publicaciones/${id}`);
  }
}
