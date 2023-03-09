import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {}

  public ngOnInit(): void {
    // particlesJS.load('particles-js', '../../../assets/particlesjs-config.json');
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
}
