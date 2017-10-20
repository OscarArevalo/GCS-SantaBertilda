import { Injectable } from '@angular/core';

@Injectable()
export class Globals{
  url:string;
  uploadImage:string;

  constructor(){
    this.url = "http://localhost:3000";
    this.uploadImage = this.url + "/uploadImage";
  }
}
