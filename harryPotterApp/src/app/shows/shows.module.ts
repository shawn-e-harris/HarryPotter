import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { QuotesModule } from "../quotes/quotes.module";
import { ShowsComponent } from "./shows.component";

@NgModule({
    declarations: [
        ShowsComponent
    ],
    imports: [
        BrowserModule,
        QuotesModule
    ],
    bootstrap: [ShowsComponent]
})
export class ShowsModule { }