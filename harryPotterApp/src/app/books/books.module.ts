import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuotesModule } from "../quotes/quotes.module"
import { BooksComponent } from "./books.component"

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    BrowserModule,
    QuotesModule
  ],
  bootstrap: [BooksComponent]
})
export class BooksModule { }
