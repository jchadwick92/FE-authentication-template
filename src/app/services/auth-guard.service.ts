import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from './jwt.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    public jwt: JwtService,
    public router: Router,
    public authService: AuthService
  ) { }

  canActivate() {
    if (!this.jwt.isSessionActive()) {
      this.authService.logout()
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
