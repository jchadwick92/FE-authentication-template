import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor(
    public authService: AuthService,
    public store: StoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.user = this.route.snapshot.data.currentUser;
  }

  logout() {
    this.authService.logout();
  }
}
