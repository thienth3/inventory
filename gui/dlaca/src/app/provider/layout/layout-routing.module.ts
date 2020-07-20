import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ProviderAuthGuard } from 'src/app/auth/guard/provider-auth.guard';
import { HomeComponent } from '../main/home/home.component';



const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [ProviderAuthGuard]
}
];

export class LayoutRoutingModule { }

