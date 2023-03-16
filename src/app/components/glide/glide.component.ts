import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { DisplayFetchService } from 'src/app/services/display-fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glide',
  templateUrl: './glide.component.html',
  styleUrls: ['./glide.component.css'],
})
export class GlideComponent implements OnInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  constructor(private display: DisplayFetchService, public router: Router) {
    this.Buscar();
  }

  ngOnInit(): void {
    // this.Buscar();
  }

  imageFileNames: { name: string }[];

  handleImageError(event: any) {
    console.error('Error loading image:', event.target.src);
  }

  Buscar() {
    this.display.performGetEx().subscribe((data: any) => {
      this.imageFileNames = data;
      console.log(this.imageFileNames);
    });
  }

  public pageLoaded: boolean = false;
}
