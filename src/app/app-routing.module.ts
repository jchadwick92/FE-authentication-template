import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { CurrentUserResolver } from "./services/current-user.resolver";
import { BaseComponent } from "./base/base.component";

const routes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  {
    path: "",
    component: BaseComponent,
    resolve: { currentUser: CurrentUserResolver },
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuardService],
        resolve: { currentUser: CurrentUserResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CurrentUserResolver]
})
export class AppRoutingModule {}
