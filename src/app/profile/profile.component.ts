import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  constructor(
    public userService: UserService,
    public store: StoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.currentUser;
  }
}
