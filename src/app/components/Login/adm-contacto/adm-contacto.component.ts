import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adm-contacto',
  templateUrl: './adm-contacto.component.html',
  styleUrls: ['./adm-contacto.component.css']
})
export class AdmContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('#example').DataTable();    
  }

}
