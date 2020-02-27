import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProviderAuthGuard } from 'src/app/auth/guard/provider-auth.guard';
import { LinkGoogleComponent } from './link-google/link-google.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [ProviderAuthGuard]
},
{
  path: '',
  component: LinkGoogleComponent
},
{
  path: 'sign-in',
  component: SignInComponent
},
{
  path: 'sign-up',
  component: CreateAccountComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
