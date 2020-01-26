import { NgModule } from '@angular/core';
import { QuotesComponent } from '../quotes/quotes.component';


@NgModule({
  declarations: [
    QuotesComponent,
  ],
  exports: [
    QuotesComponent
  ]
})
export class QuotesModule { }