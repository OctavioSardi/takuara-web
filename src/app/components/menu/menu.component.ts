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

  // @HostListener('document:scroll', ['$event'])
  // scrolling() {
  //   let barra = document.getElementById('navbar') as HTMLElement;
  //   if (window.scrollY == 0) {
  //     barra.style.background = 'transparent';
  //     barra.style.transition = '0,5s ease-in';
  //   } else {
  //     barra.style.background = 'rgb(251, 184, 70)';
  //   }
  // }

  activeHeading: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const headings = document.querySelectorAll('.text-box');

    // headings.forEach((heading, index) => {
    //   const rect = heading.getBoundingClientRect();
    //   if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //     activeIndex = index;
    //   }
    // });

    let activeIndex = -1;
    const viewHeight = window.innerHeight;
    const threshold = viewHeight * 0.5;
    headings.forEach((heading, index) => {
      const rect = heading.getBoundingClientRect();
      if (rect.bottom <= threshold) {
        activeIndex = index;
      }
    });

    if (activeIndex >= 0) {
      this.activeHeading = headings[activeIndex].textContent!;
      console.log(this.activeHeading);
    } else {
      this.activeHeading = '';
    }
  }
}
