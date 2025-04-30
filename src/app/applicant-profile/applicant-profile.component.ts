import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {
  user: any = {}; // Object to store user data
  userEmail: string | null = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail'); // Get email from localStorage
    if (this.userEmail) {
      this.getProfile(this.userEmail);
    } else {
      console.error("No email found in localStorage");
    }
  }

  getProfile(email: string) {
    console.log("Fetching profile for email:", email); // Debugging
    this.http.get(`https://jobhub-backend-wlfu.onrender.com/get-profile-by-email?email=${email}`).subscribe(
      (data: any) => {
        console.log('API Response:', data); // ✅ Check response
        this.user = data;
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }
}
