import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    LayoutModule,
  ]
})
export class ProviderModule { }
