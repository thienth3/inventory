import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/core/services/swagger-api/services/register.service';
import { SignUpInfo } from '../../../core/services/swagger-api/models/signup-info.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  registerForm: FormGroup
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router) { }
  signupInfo: SignUpInfo;
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
      lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[_.@A-Za-z0-9-]*$')]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]]
    });
  }
  onSubmitRegisters() {
    const user = {
      firstName: this.registerForm.get(['firstName']).value,
      lastName: this.registerForm.get(['lastName']).value,
      email: this.registerForm.get(['email']).value,
      password: this.registerForm.get(['password']).value,
    } as SignUpInfo;
    console.log("jjjjkkk", user)
    this.registerService.save(user).subscribe(res => {
      console.log("res", res)
      this.router.navigate(['provider/sign-in'])
    }, error => {
    });
  }
}
