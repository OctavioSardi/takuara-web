import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  trasparentFlag: Boolean = false;
  toggleTransparency() {
    this.trasparentFlag = !this.trasparentFlag;
  }

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:scroll', ['$event'])
  scrolling() {
    let barra = document.getElementById('navbar') as HTMLElement;
    if (window.scrollY == 0) {
      barra.style.background = 'transparent';
    } else {
      barra.style.background = '#d6b785';
    }
  }
}
