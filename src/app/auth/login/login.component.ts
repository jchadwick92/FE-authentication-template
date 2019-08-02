import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public authService: AuthService,
    public store: StoreService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("aaa@aaa.com", [Validators.required]),
      password: new FormControl("bbbbbb", [Validators.required])
    });
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    if (this.loginForm.valid) {
      this.authService.login(credentials)
    }
  }

  getErrorMessage() {
    return this.store.state.logInError;
  }
}
