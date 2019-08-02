import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state = {
    logInError: null,
    registerError: null
  };
}
