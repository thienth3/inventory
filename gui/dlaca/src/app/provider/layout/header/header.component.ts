import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public authority: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    if (this.isAuthorty())
      return true;
  }

  isAuthorty(): boolean {
    const token = localStorage.getItem('idToken');
    if (token) {
      return true
    }
    return false
  }
  
  logOut() {
    const token = localStorage.removeItem('idToken')
    this.router.navigate(['provider/sign-in'])
  }

}
