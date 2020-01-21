import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuotesModule } from "../quotes/quotes.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    QuotesModule
  ],
  bootstrap: [MoviesComponent]
})
export class MoviesModule { }
