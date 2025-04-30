import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit { 
  userEmail: string | null = '';
  user: any = {}; // Holds fetched user data
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {  
    this.userEmail = localStorage.getItem('userEmail');
    console.log("User Email from LocalStorage:", this.userEmail);

    if (!this.userEmail) {
      alert("User not logged in");
      this.router.navigate(['/login']);
    } else {
      this.fetchUserProfile();
    }
  }

  fetchUserProfile() {
    this.http.get(`https://jobhub-backend-wlfu.onrender.com/get-profile/${this.userEmail}`).subscribe(
      (data: any) => {
        console.log("Fetched User Data:", data);
        if (data) {
          Object.assign(this.user, data); // ✅ Ensures Angular detects changes
        }
        this.loading = false;
      },
      (error) => {
        console.error("Error fetching profile:", error);
        this.errorMessage = "Failed to load profile. Please try again.";
        this.loading = false;
      }
    );
  }

  updateProfile() {
    if (!this.user.FullName || !this.user.Phone) {
      alert("Please fill in all required fields.");
      return;
    }

    this.http.put(`https://jobhub-backend-wlfu.onrender.com/update-profile/${this.userEmail}`, this.user)
      .subscribe(
        (response: any) => {
          alert("Profile updated successfully!");
          this.router.navigate(['/applicant-dashboard/profile']);
        },
        (error) => {
          console.error("Error updating profile:", error);
          alert("Failed to update profile.");
        }
      );
  }

  cancelEdit() {
    this.router.navigate(['/applicant-dashboard/profile']);
  }
}
