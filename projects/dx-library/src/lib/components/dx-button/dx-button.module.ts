import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxFlatButtonComponent } from "./components/dx-flat-button/dx-flat-button.component";

@NgModule({
  declarations: [DxFlatButtonComponent],
  imports: [CommonModule],
  exports: [DxFlatButtonComponent]
})
export class DxButtonModule {}
