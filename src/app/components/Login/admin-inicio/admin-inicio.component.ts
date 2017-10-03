import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {

  imgs: Imagen[];
  img: Imagen;

  proms : Array<Promocion>;
  promo: Promocion;

  constructor() {
    this.imgs = [];
    this.imgs[0] = {id:1, nombre:"Estetoscopio", path:"../assets/img/car1.jpg"};
    this.imgs[1] = {id:2, nombre:"Med Lab", path:"../assets/img/car2.jpg"};
    this.imgs[2] = {id:3, nombre:"Insumos", path:"../assets/img/car3.jpg"};
    this.img = {id:null, nombre:null, path:null};


    this.proms = new Array<Promocion>();
    this.proms[0] = {id:1, nombre:"Promo Medicamentos", descripcion: "Promocion sobre medicamentos", fInicio:"09/09/2017", fFin:"09/10/2017", path:"../assets/img/promo/promo1.png"};
    this.proms[1] = {id:2, nombre:"Promo Medicamentos", descripcion: "Promocion sobre medicamentos", fInicio:"09/09/2017", fFin:"09/10/2017", path:"../assets/img/promo/promo2.jpg"};
    this.proms[2] = {id:3, nombre:"Promo Medicamentos", descripcion: "Promocion sobre medicamentos", fInicio:"09/09/2017", fFin:"09/10/2017", path:"../assets/img/promo/promo3.png"};
    this.proms[3] = {id:4, nombre:"Promo Medicamentos", descripcion: "Promocion sobre medicamentos", fInicio:"09/09/2017", fFin:"09/10/2017", path:"../assets/img/promo/anuncio1.png"};
    this.promo =  {id:null, nombre:null, descripcion: null, fInicio:null, fFin:null, path:null};
  }

  ngOnInit() {
    $('#listPromo').DataTable();
  }

  adminImagen(i){
    this.img = this.imgs[i];
  }

  addEditPromo(i, action){
    this.promo = this.proms[i];
    console.log(this.promo);
  }

}

interface Imagen {
  id: number;
  nombre: string;
  path: string;
}

interface Promocion{
  id: number;
  nombre: string;
  descripcion: string;
  fInicio: string;
  fFin: string;
  path: string;
}
