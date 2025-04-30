import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent implements OnInit {

  user = {
    FullName: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    CompanyName: '',
    
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  consoleCheck() {
    console.log("Register button clicked!");
  }

  handleRegister(event?: Event) {
    if (event) event.preventDefault(); // Prevent page refresh
    
    

    console.log("User Data:", this.user);

    this.http.post("https://jobhub-backend-wlfu.onrender.com/employer-register", this.user)
      .subscribe({
        next: (response) => {
          console.log("Registration successful!", response);
          this.router.navigate(['/employer-dashboard']); // Navigating only after successful registration
        },
        error: (error) => {
          console.error("Registration failed", error);
        }
      });
  }
}
