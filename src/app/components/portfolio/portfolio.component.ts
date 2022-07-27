import { Component, Host, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor( public router: Router) {}

  ngOnInit(): void {}

//   @HostListener('wheel', ['$event'])
//   onWheelScroll(evento: WheelEvent) {
//     // Scroll up
//     if (evento.deltaY > 0) {
//       this.router.navigate(['/contacto'])
//     }
//     else {
//       this.router.navigate(['/servicios'])
//     }
//   }
}
