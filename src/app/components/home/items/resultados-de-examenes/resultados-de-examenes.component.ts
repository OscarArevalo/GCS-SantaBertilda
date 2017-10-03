import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-resultados-de-examenes',
  templateUrl: './resultados-de-examenes.component.html',
  styleUrls: ['./resultados-de-examenes.component.css']
})
export class ResultadosDeExamenesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable();
  }

}
