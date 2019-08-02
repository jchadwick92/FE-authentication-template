import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service";

@Injectable()
export class CurrentUserResolver implements Resolve<any> {
  constructor(
    public userService: UserService,
    public authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (this.authService.isAuthenticated()) {
      return this.userService.findLoggedInUser();
    }
  }
}
