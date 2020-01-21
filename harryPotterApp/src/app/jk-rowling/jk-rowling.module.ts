import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuotesModule } from "../quotes/quotes.module"
import { JkRowlingComponent } from "./jk-rowling.component"

@NgModule({
  declarations: [
    JkRowlingComponent
  ],
  imports: [
    BrowserModule,
    QuotesModule
  ],
  bootstrap: [JkRowlingComponent]
})
export class AppModule { }
