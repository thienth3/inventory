import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public authority: boolean;
  constructor(
    private router: Router,
    private authenService: AuthService
  ) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
  
    if (this.authenService.getToken() != null)
      return true
  }

  logOut() {
    this.authenService.removeAccount();
    this.router.navigate(['provider/sign-in'])
  }

}
