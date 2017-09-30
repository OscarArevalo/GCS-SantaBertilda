import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {


@ViewChild('exampleModal') modal;

constructor(private router: Router){

}

closeModal(){
  console.log("modaaaal");
  this.modal.nativeElement.className = 'modal hide';

}

}
