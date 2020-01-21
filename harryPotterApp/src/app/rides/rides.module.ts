import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { QuotesModule } from "../quotes/quotes.module";
import { RidesComponent } from "./rides.component"

@NgModule({
    declarations: [
        RidesComponent
    ],
    imports: [
        BrowserModule,
        QuotesModule
    ],
    bootstrap: [RidesComponent]
})
export class RidesModule { }