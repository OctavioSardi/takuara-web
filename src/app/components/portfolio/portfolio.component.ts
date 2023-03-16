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
export class PortfolioComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}

// NGX-Glide
