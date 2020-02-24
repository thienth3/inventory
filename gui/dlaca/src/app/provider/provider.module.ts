
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from '../shared/material.module';


import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';

import {MatRippleModule} from '@angular/material/core';


import { MatFormFieldModule } from '@angular/material';
import { FormsModule,  } from '@angular/forms';


@NgModule({
  declarations: [ProviderComponent, 
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    LayoutModule,
    FormsModule, 

    MatSliderModule,
    MatIconModule,

    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MaterialModule,
 
    MatRippleModule,
  ],
 
})
export class ProviderModule { }
