import { Component, OnInit } from '@angular/core';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adm-cliente',
  templateUrl: './adm-cliente.component.html',
  styleUrls: ['./adm-cliente.component.css']
})
export class AdmClienteComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

      $('#example').DataTable();

  }

}
