import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string = "Titulo imagen";

  constructor( private router:Router) {

  }

  ngOnInit() {

     console.log(this.nombre);
  }

  RedirectServiciosSB(){
    this.router.navigate(['/faq']);
  }
}
