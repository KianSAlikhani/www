import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
