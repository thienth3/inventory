import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/shared/material.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LinkGoogleComponent } from './link-google/link-google.component';
import { NotificationComponent } from './notification/notification.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [MainComponent, HomeComponent, SignInComponent, CreateAccountComponent, LinkGoogleComponent, NotificationComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,

  ]
})
export class MainModule { }
