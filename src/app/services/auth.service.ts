import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtService } from "./jwt.service";
import { StoreService } from "./store.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = "http://localhost:5001/api/auth";
  constructor(
    public http: HttpClient,
    public jwtService: JwtService,
    public store: StoreService,
    public router: Router
  ) {}

  login(credentials) {
    this.http.post(`${this.baseUrl}/login`, { ...credentials }).subscribe(
      result => {
        this.jwtService.setToken(result["token"]);
        this.router.navigate(["profile"]);
      },
      error => (this.store.state.logInError = error.error)
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  register(user) {
    return this.http.post(`${this.baseUrl}/register`, { ...user }).subscribe(
      result => { this.router.navigate(["login"]) },
      error => { this.store.state.registerError = error.error; }
    );
  }

  checkEmailNotTaken(email) {
    return this.http.post(`${this.baseUrl}/checkEmailUnique`, { email: email });
  }

  isAuthenticated() {
    return this.jwtService.isSessionActive();
  }
}
