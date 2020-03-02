import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule, } from '@angular/forms';

@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    LayoutModule,
    FormsModule,
  ],

})
export class ProviderModule { }
