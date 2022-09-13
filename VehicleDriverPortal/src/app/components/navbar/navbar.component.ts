import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = true;
  userAuthStatusSub: any;
  
  constructor(private _authService: AuthService) {}
  
  ngOnInit(): void {
    this.isLoggedIn = this._authService.isAuthenticated();
    this.userAuthStatusSub = this._authService.getUserAuthStatusChangeEmitter()
      .subscribe(value => this.isLoggedIn = value);
  }

  ngOnDestroy() {
    this.userAuthStatusSub?.unsubscribe();
  }

  logout(): void {
    this._authService.logout();
  }
}
