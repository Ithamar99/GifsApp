import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService ) {}

  // El metodo buscar, se acciona de manera lineal por lo que estas acciones dependeran la una de la otra
  buscar(  ){

    // variable que captura el elemento a buscar
    const valor = this.txtBuscar.nativeElement.value;

    // Validacion para evitar que se envien cadenas vacias al historial en mi Sidebar
    if ( valor.trim().length === 0) {
      return;
    }

    // Utilizo el servicio "gifsService" para invocar al metodo buscarGifs
    this.gifsService.buscarGifs ( valor );

    // Devuelvo una cadena vacia a txtBuscar para limpiar la barra de busqueda
    this.txtBuscar.nativeElement.value = '';

    
    console.log(this.gifsService)
  }
}
