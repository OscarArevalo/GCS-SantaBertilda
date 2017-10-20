import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Globals } from '../../../globals';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {

  imgs: Array<Imagen>;
  img: Imagen;

  proms : Array<Promocion>;
  promo: Promocion;

  filesToUpload: Array<File>;

  constructor(private apiService: ApiService, private globals: Globals) {
    this.imgs = new Array<Imagen>();
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

    this.filesToUpload = [];
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

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  uploadImage(){
    console.log(this.filesToUpload);
    //this.apiService.uploadFile(this.globals.uploadImage, [], this.filesToUpload).then((result) => {
    this.makeFileRequest(this.globals.uploadImage, [], this.filesToUpload).then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
      return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          for(var i = 0; i < files.length; i++) {
              formData.append("uploads[]", files[i], files[i].name);
          }
          xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.response));
                  } else {
                      reject(xhr.response);
                  }
              }
          }
          xhr.open("POST", url, true);
          xhr.send(formData);
      });

}}

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
