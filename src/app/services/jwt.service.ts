import { Injectable } from '@angular/core';
import { JwtHelper } from './jwt.helper';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token")
  }

  isSessionActive() {
    return !this.isTokenExpired();
  }

  isTokenExpired() {
    const currentDate = new Date();
    const currentTimeStamp = currentDate.getTime();
    return this.getTokenExpirationDate() < currentTimeStamp;
  }

  getTokenExpirationDate() {
    const payload = this.getPayload()
    if (payload === null) {
      return 0;
    }
    if (!payload.hasOwnProperty("exp")) {
      return 0;
    }
    const exp = payload["exp"];
    if (typeof exp !== "number") {
      return 0
    }
    return exp * 1000;
  }

  getPayload() {
    const token = this.getToken();
    if (token === null) {
      return null;
    }
    const parts = token.split(".")
    if (parts.length !== 3) {
      return null;
    }
    let payload;
    try {
      payload = JSON.parse(JwtHelper.b64DecodeUnicode(parts[1]))
    } catch (e) {
      console.log(e);
      payload = null;
    }
    return payload;
  }

  setHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.getToken()}` });
  }
}
