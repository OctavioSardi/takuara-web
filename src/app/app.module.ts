import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MotivosComponent } from './components/motivos/motivos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgxGlideComponent, NgxGlideModule } from 'ngx-glide';
import { WpButtonComponent } from './components/wp-button/wp-button.component';
import { GlideComponent } from './components/glide/glide.component';

@NgModule({
  imports: [
    NgxGlideModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    //Ref Angular Routing
    // RouterModule.forRoot([
    //   { path: 'home', component: HomeComponent },
    //   { path: 'motivos', component: MotivosComponent },
    //   { path: 'servicios', component: ServiciosComponent },
    //   { path: 'portfolio', component: PortfolioComponent },
    //   { path: 'contacto', component: ContactoComponent },
    //   { path: '**', redirectTo: '', pathMatch: 'full' },
    // ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MotivosComponent,
    ServiciosComponent,
    PortfolioComponent,
    ContactoComponent,
    MenuComponent,
    WpButtonComponent,
    GlideComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
