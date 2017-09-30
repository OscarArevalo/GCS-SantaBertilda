import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adm-medicos',
  templateUrl: './adm-medicos.component.html',
  styleUrls: ['./adm-medicos.component.css']
})
export class AdmMedicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $('#example').DataTable();

  }

}
