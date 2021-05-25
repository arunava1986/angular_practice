// Re-Usable Module

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SimpleComponent } from "./messagecomponent/app.simple.component";


@NgModule({
    imports: [CommonModule],
    declarations:[SimpleComponent]
})
export class UtilityLibModule {}