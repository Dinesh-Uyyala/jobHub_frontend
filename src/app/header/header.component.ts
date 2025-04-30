import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import your AuthService
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn$ = this.authService.isLoggedIn$; // Store observable in a variable
  
  constructor(public authService: AuthService, private router: Router) {} // Change 'private' to 'public'

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to home after logout
  }
}
