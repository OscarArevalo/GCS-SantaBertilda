import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adm-servicios',
  templateUrl: './adm-servicios.component.html',
  styleUrls: ['./adm-servicios.component.css']
})
export class AdmServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('#example').DataTable();
      $('#example2').DataTable();
  }

}
