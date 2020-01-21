import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { QuotesModule } from "../quotes/quotes.module";
import { ShopsComponent } from "./shops.component";

@NgModule({
    declarations: [
        ShopsComponent
    ],
    imports: [
        BrowserModule,
        QuotesModule
    ],
    bootstrap: [ShopsComponent]
})
export class ShopsModule { }