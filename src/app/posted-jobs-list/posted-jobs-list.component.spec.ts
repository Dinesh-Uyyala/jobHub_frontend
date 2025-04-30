import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posted-jobs-list',
  templateUrl: './posted-jobs-list.component.html',
  styleUrls: ['./posted-jobs-list.component.css']
})
export class PostedJobsListComponent implements OnInit {
  jobs: any[] = [];
  employerEmail: string | null = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    console.log("ngOnInit is running...");
    this.employerEmail = localStorage.getItem('userEmail'); 
    console.log("Stored employer email:", this.employerEmail);

    if (this.employerEmail) {
      this.getPostedJobs(this.employerEmail);
    } else {
      console.error("No employer email found in localStorage");
    }
  }

  getPostedJobs(email: string) {
    console.log("Fetching jobs posted by:", email);
    this.http.get(`https://jobhub-backend-wlfu.onrender.com/get-posted-jobs?email=${email}`).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching posted jobs:', error);
      }
    );
  }

  // 🔹 Edit Job Function
  editJob(job: any) {
    this.router.navigate(['/edit-jobslist', job.id]); // Pass job ID dynamically
  }

  // 🔹 Delete Job Function
  deleteJob(jobId: number) {
    console.log('Deleting job with ID:', jobId); // 🔍 Debugging
  
    if (confirm('Are you sure you want to delete this job?')) {
      this.http.delete(`https://jobhub-backend-wlfu.onrender.com/delete-job/${jobId}`).subscribe(
        () => {
          console.log('Job deleted:', jobId);
          this.jobs = this.jobs.filter(job => job.id !== jobId); // Remove from UI
        },
        (error) => {
          console.error('Error deleting job:', error);
        }
      );
    }
  }
}
