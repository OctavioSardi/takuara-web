import { Component, HostListener, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }

  @HostListener('document:mousemove', ['$event'])
  documentMouseMove($event: MouseEvent) {
    let movingElements = Array.from(
      document.getElementsByClassName('object') as HTMLCollectionOf<HTMLElement>
    );
    movingElements.forEach(function (move) {
      var moving_value = Number(move.getAttribute('data-value'));
      var x = ($event.clientX * moving_value) / 250;
      var y = ($event.clientY * moving_value) / 250;

      move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    });
  }

  @HostListener('document:click', ['$event'])
  documentClickEvent($event: MouseEvent) {
    console.log('Through HostListener - Click Event Details: ', $event);
  }
}
