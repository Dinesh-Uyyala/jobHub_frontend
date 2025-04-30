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

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs() {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.http.get<any[]>(`https://jobhub-backend-wlfu.onrender.com/get-posted-jobs?email=${email}`).subscribe(
        (response) => {
          this.jobs = response;
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
      );
    }
  }

  deleteJob(id: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.http.delete(`https://jobhub-backend-wlfu.onrender.com/delete-job/${id}`).subscribe(
        () => {
          this.jobs = this.jobs.filter(job => job.id !== id);
          alert('Job deleted successfully!');
        },
        (error) => {
          console.error('Error deleting job:', error);
          alert('Failed to delete job.');
        }
      );
    }
  }

  editJob(job: any) {
    // Navigate to the job editing page with job ID
    this.router.navigate(['/edit-jobslist', job.id]);
  }

  goBack() {
    this.router.navigate(['/employer-dashboard']);
  }
}
