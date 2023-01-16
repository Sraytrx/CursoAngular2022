import { Component, OnInit } from '@angular/core';
//import * as internal from 'stream';

//una interface declara una serie de metodos y propiedades que deben ser implementados luego por una o mas clases
interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}
//signo de ? para agregar valor nulll

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer App ANGULAR ';
  public ArregloTarjetas: Tarjeta[]=[]
  //Los arrays son objetos detinados a almacenar grupos de datos relacionados entre si. Tienen sus propiedades y metodos especificos.

  ngOnInit(): void {

    this.ArregloTarjetas = [
      {titulo:"Video 1", subtitulo: 'Subtitulo Video 1'},
      {titulo:"Video 2", subtitulo: 'Subtitulo Video 2'},
      {titulo:"Video 3", subtitulo: 'Subtitulo Video 3'},
    ]
  }
}
