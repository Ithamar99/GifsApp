import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = 'lJPw2b41XAyMy5sRRoi8dTPuCbUcKzk3';
  private _historial: string [] = [];

  get historial(){
    return [...this._historial];
  }

  constructor ( private http: HttpClient ) {}

  buscarGifs (query: string = '') {

    // Insertar en el query cadenas en miniusculas
    query = query.trim().toLocaleLowerCase();


    // Validacion para evitar repetir consultas iguales en el historial
    if ( !this._historial.includes( query )) {
    
    // Inserto la consulta en el historial
         this._historial.unshift( query );

    }
    // De esta manera controlo que solo se mustren un numero maximo de 10 consultas
    this._historial = this._historial.splice(0,10);

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=lJPw2b41XAyMy5sRRoi8dTPuCbUcKzk3&q=DRAGON BALL&limit=10')
    .subscribe( (resp: any) => {
      console.log(resp.data);
    });
     
    
  }
}
