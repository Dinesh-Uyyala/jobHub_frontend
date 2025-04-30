import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject to track login state (initially false)
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  
  // Exposing it as an Observable
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    this.checkLoginStatus(); // Check login status on page load
  }

  // Check if user is authenticated
  public isAuthenticated(): boolean {
    // Retrieve user object from localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    // Check if user ID exists
    return !!user.id; // Returns true if user.id exists
  }

  // Login function (called from LoginComponent)
  login(user: any) {
    this.isLoggedInSubject.next(true); // Update login state
    localStorage.setItem('user', JSON.stringify(user)); // Store user data
  }

  // Logout function
  logout() {
    this.isLoggedInSubject.next(false); // Update login state
    localStorage.removeItem('user'); // Remove user data
  }

  // Check if user is already logged in (on page refresh)
  private checkLoginStatus() {
    const user = localStorage.getItem('user');
    this.isLoggedInSubject.next(!!user); // Convert to boolean (true if user exists)
  }
}
