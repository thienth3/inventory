import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, HomeComponent, SignInComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MaterialModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
