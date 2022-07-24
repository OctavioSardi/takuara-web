import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll up
    if (evento.deltaY > 0) {
      this.router.navigate(['/portfolio'])
    }
    else {
      this.router.navigate(['/motivos'])
    }
  }
}
