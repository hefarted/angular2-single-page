import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './auth/_service/authentication.service';
import { Role } from './_models/role.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beta-project';
  user: User;

  constructor( private authenitcationService: AuthenticationService, 
    public router: Router) {
      this.authenitcationService.currentUser.subscribe(x => this.user = x);
  }

  get isAdmin() {
    return this.user && this.user.role == Role.Admin;
  }

  logout() {
    this.authenitcationService.logout();
  }
}
