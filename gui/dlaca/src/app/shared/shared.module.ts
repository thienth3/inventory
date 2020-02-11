import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalizePipe } from './pipes/localize.pipe';

@NgModule({
  declarations: [
    LocalizePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    LocalizePipe
  ]
})
export class SharedModule { }
