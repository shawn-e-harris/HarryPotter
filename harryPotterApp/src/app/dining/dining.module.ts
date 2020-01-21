import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuotesModule } from "../quotes/quotes.module"
import { DiningComponent } from "./dining.component"

@NgModule({
  declarations: [
    DiningComponent
  ],
  imports: [
    BrowserModule,
    QuotesModule
  ],
  bootstrap: [DiningComponent]
})
export class AppModule { }
