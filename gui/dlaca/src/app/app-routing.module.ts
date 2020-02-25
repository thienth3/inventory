import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderAuthGuard } from './auth/guard/provider-auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'provider',
    pathMatch: 'full'
  },
  {
    path: 'provider',
    canActivate: [ProviderAuthGuard],
    loadChildren: './provider/provider.module#ProviderModule'
  },
  // {
  //   path: '',
  //   loadChildren: './visitor/visitor.module#VisitorModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
