import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {

  imgs: Imagenes[];
  img: Imagenes;

  constructor() {
    this.imgs = [];
    this.imgs[0] = {id:1, nombre:"Estetoscopio", path:"../assets/img/car1.jpg"};
    this.imgs[1] = {id:2, nombre:"Med Lab", path:"../assets/img/car2.jpg"};
    this.imgs[2] = {id:3, nombre:"Insumos", path:"../assets/img/car3.jpg"};
  }

  ngOnInit() {
  }

  adminImagen(i){
    this.img = this.imgs[i];
  }

}

interface Imagenes {
  id: number;
  nombre: string;
  path: string;
}
