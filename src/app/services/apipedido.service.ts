import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { delay, map } from 'rxjs/operators';
import { Producto } from '../models/producto.model';
import { Historial } from '../models/historial.model';
@Injectable({
  providedIn: 'root'
})
export class ApipedidoService {

  constructor(private http: HttpClient) { }

   // Url de la API 
   private url = 'https://pruebafullstack-df259-default-rtdb.firebaseio.com/';


   // Retorna los ultimos pedidos
  getPedidos() {
    return this.http.get<Pedido[]>(`${this.url}/pedido.json`).pipe(
      map(this.crearArrayPedido),
      delay(0)
    );
  }


  private crearArrayPedido(propiedadObj: any) {

    const lstPedido: Pedido[] = [];

    Object.keys(propiedadObj).forEach((key: any) => {

      //if (!isNaN(+key)) {
        const pedido: Pedido = propiedadObj[key];       
        lstPedido.push(pedido);
      //}
    });

    return lstPedido;

  }

   // Retorna el historial de busquedas 
   getHistorial() {
    return this.http.get<Historial[]>(`${this.url}/history.json`).pipe(
      map(this.crearHistory),
      delay(0)
    );
  }


  private crearHistory(propiedadObj: any) {

    const lstHistory: Historial[] = [];

    Object.keys(propiedadObj).forEach((key: any) => {
        const history: Historial = propiedadObj[key];       
        lstHistory.push(history);
    });

    return lstHistory;

  }

  // Retorna el producto especifico
  getProducto(idpro: string) {
    return this.http.get<Producto>(`${this.url}/productos/${idpro}.json`);
  }
}
