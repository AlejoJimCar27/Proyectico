import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarProducto();

  }

  private cargarProducto(){
    this.http.get('https://angular-html-7e9f3.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {
      console.log(resp);
      this.productos = resp;

      setTimeout(() => {
        this.cargando = false;
      }, 100);

    })
  }
}
