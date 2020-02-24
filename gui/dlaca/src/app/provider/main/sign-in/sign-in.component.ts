import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { SignInInfo } from 'src/app/core/services/swagger-api/models/signin-info.class';
import { SignInService } from 'src/app/core/services/swagger-api/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  authenticationError = false;
  token: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private signInService: SignInService,
    private router: Router,
  ) { }
  signInInfo: SignInInfo;
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
    });
  }
  onSubmitSignIn() {
    const user = {

      username: this.signInForm.get(['email']).value,
      password: this.signInForm.get(['password']).value,
    } as SignInInfo;

    this.signInService.save(user).subscribe(res => {
      console.log("res", res),

        () => (this.authenticationError = true);
      localStorage.setItem('idToken', res.idToken);
      this.router.navigate(['provider/home']);

    }, error => {

    });
    console.log(user);
  }

}
