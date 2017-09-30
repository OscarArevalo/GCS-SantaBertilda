import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adm-usuario',
  templateUrl: './adm-usuario.component.html',
  styleUrls: ['./adm-usuario.component.css']
})
export class AdmUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $('#example').DataTable();

  }

}
