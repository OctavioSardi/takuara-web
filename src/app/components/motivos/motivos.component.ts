import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrls: ['./motivos.component.css']
})
export class MotivosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  // @HostListener('wheel', ['$event'])
  // onWheelScroll(evento: WheelEvent) {
  //   // Scroll up
  //   if (evento.deltaY > 0) {
  //     this.router.navigate(['/servicios'])
  //   }
  //   else {
  //     this.router.navigate(['/home'])
  //   }
  // }
}
