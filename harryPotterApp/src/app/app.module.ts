import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { JkRowlingComponent } from './jk-rowling/jk-rowling.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { DiningComponent } from './dining/dining.component';
import { RidesComponent } from './rides/rides.component';
import { ShopsComponent } from './shops/shops.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    QuotesComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
