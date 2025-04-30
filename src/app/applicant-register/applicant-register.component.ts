import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applicant-register',
  templateUrl: './applicant-register.component.html',
  styleUrls: ['./applicant-register.component.css']
})
export class ApplicantRegisterComponent {
  applicant = {
    FullName: '',
    Email: '',
    Password: '',
    Phone: '',
    Resume: '',  // Now we just store a URL
    Role: 'Applicant'
  };

  constructor(private http: HttpClient) {}

  submitApplicant() {
    this.http.post('http://localhost:5000/applicant-register', this.applicant).subscribe(
      (response) => {
        alert('Application submitted successfully!');
        console.log('Applicant Data:', response);
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    );
  }
}