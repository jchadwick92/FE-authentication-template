import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    public authService: AuthService,
    public store: StoreService
    ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  onSubmit() {
    this.email.markAsDirty();
    this.username.markAsDirty()
    this.password.markAsDirty()
    const newUser = this.registerForm.value;
    if (this.registerForm.valid) {
      this.authService.register(newUser)
    }
  }

  getEmailErrorMessage() {
    return !!this.store.state.registerError ? this.store.state.registerError.error : null;
  }

  get email() { return this.registerForm.get('email') }
  get username() { return this.registerForm.get('username') }
  get password() { return this.registerForm.get('password') }
}
