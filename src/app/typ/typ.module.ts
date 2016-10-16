import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypService } from './typ.service';
import { TypComponent } from './typ.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TypComponent
  ],
  exports: [
    TypComponent
  ],
  providers: [
    TypService
  ]
})
export class TypModule { }
