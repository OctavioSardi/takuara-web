import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  navbarOpen: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scrollTo(anchorTag: string) {
    let titleView = document.getElementById(anchorTag) as HTMLElement;
    titleView.scrollIntoView();
    this.toggleNavbar();
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:scroll', ['$event'])
  scrolling() {
    let barra = document.getElementById('navbar') as HTMLElement;
    if (window.scrollY == 0) {
      barra.style.background = 'transparent';
      barra.style.transition = '0,5s ease-in';
    } else {
      barra.style.background = 'rgb(251, 184, 70)';
    }
  }
}
