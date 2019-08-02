import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:5001/api/users";
  constructor(
    public http: HttpClient,
    public jwt: JwtService
  ) { }

  findLoggedInUser() {
    const headers = this.jwt.setHeaders();
    return this.http.get(`${this.baseUrl}/me`, { headers });
  }
}
