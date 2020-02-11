import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const returnUrl = state.url;

    if (this.auth.isProvider()) {
      // logged in so return true
      return true;
    }

    this.auth.removeAccount();
    this.router.navigate(['/'], { queryParams: { login: '1', url: returnUrl} });

    return false;
  }
}
