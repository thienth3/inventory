import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInInfo } from 'src/app/core/services/swagger-api/models/signin-info.class';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  // authenticationError = false;
  // token: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,

    private router: Router,
    private authService: AuthService
  ) { }


  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
    });
  }
  
  onSubmitSignIn() {
    const user = {
      email: this.signInForm.get(['email']).value,
      password: this.signInForm.get(['password']).value,
    } as SignInInfo;
    this.authService.login(user).subscribe(res => {
      if (res) {
        this.router.navigate(['/provider']);
      }

    })
  }

}
