import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public authority: boolean;
  constructor() { }

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
 
}
