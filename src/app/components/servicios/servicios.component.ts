import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  showText: boolean = false;

  // @HostListener('wheel', ['$event'])
  // onWheelScroll(evento: WheelEvent) {
  //   // Scroll up
  //   var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)  - window.innerHeight;
  //   if (window.scrollY == limit && evento.deltaY > 0) {
  //     this.router.navigate(['/portfolio'])
  //   }
  //   else if (window.scrollY == 0 && evento.deltaY < 0) {
  //     this.router.navigate(['/motivos'])
  //   }
  // }
}
