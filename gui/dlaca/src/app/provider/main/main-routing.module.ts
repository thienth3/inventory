import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProviderAuthGuard } from 'src/app/auth/guard/provider-auth.guard';
import { LinkGoogleComponent } from './link-google/link-google.component';
import { NotificationComponent } from './notification/notification.component';
import { ManageesComponent } from './managees/managees.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [ProviderAuthGuard]
}, {
  path: 'notification',
  component: NotificationComponent,
  canActivate: [ProviderAuthGuard]
},
{
  path:'managees',
  component: ManageesComponent,
   canActivate: [ProviderAuthGuard]
},
{
  path: 'link',
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
