import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from "./default.component";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule
  ]
})
export class DefaultModule { }
