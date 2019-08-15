import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DxButtonModule } from "projects/dx-library/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
