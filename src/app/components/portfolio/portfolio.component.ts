import {
  AfterViewInit,
  Component,
  Host,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { DisplayFetchService } from 'src/app/services/display-fetch.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(public router: Router, private display: DisplayFetchService) {}

  imageFileNames: { field: string }[];
  imageSrc = '';

  ngOnInit(): void {
    this.Buscar();
  }

  handleImageError(event: any) {
    console.error('Error loading image:', event.target.src);
  }

  Buscar() {
    this.display.performGetEx().subscribe((data: any) => {
      this.imageFileNames = data;
      console.log(this.imageFileNames);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageLoaded = true;
    });
  }

  public pageLoaded: boolean = false;
}
