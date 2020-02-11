import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountResourceService } from 'src/app/core/services/swagger-api/services';
import { FormService } from 'src/app/core/utils/form.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private accountService: AccountResourceService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private formService: FormService
  ) { }
  ngOnInit() {
    this.formLogin = this.fb.group({
      password: ['', [Validators.required]],
      rememberMe: [true],
      username: ['', [Validators.required]],
    });
  }

  login () {
    if (this.formLogin.invalid) {
      this.formService.tounchAll(this.formLogin);
      return;
    }
    this.authService.login(this.formLogin.value).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.router.navigate(['/provider']);
      }
    });
  }
}
