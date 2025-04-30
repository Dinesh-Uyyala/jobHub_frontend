import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userLogin: any = {};  // Object to hold user email & password

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private authService: AuthService // Inject AuthService
  ) {}

  handleLogin() {
    this.http.post("https://jobhub-backend-wlfu.onrender.com/login", this.userLogin).subscribe(
      (response: any) => {
        console.log("Full API Response:", response); // ✅ Log entire response
  
        if (response.message === "Login successful") {
          this.authService.login(response.user); // ✅ Notify AuthService
  
          // 🔹 Save user email instead of ID
          localStorage.setItem("userEmail", response.user.Email);
          localStorage.setItem("userRole", response.role); // Optional: Store role
  
          // Navigate based on role 
          setTimeout(() => {
            if (response.role === "Employer") {
              this.router.navigateByUrl('/employer-dashboard');
            } else if (response.role === "Applicant") {
              this.router.navigateByUrl('/applicant-dashboard');
            } else {
              alert("Unknown role");
            }
          }, 500);
        } else {
          alert("Invalid credentials");
        }
      },
      (error) => {
        console.error("Login failed", error);
        alert("An error occurred while logging in");
      }
    );
  }
  

}
