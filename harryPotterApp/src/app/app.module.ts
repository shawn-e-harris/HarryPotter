import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { QuotesModule } from "./quotes/quotes.module"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JkRowlingComponent } from './jk-rowling/jk-rowling.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { DiningComponent } from './dining/dining.component';
import { RidesComponent } from './rides/rides.component';
import { ShopsComponent } from './shops/shops.component';
import { ShowsComponent } from './shows/shows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    JkRowlingComponent,
    BooksComponent,
    MoviesComponent,
    DiningComponent,
    RidesComponent,
    ShopsComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuotesModule,
    BrowserAnimationsModule,

    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
