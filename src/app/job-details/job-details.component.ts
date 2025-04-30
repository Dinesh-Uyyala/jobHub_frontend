import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobId: string = '';
  job: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')!;
    this.getJobDetails(this.jobId);
  }

  getJobDetails(id: string) {
    this.http.get<any>(`https://jobhub-backend-wlfu.onrender.com/get-job/${id}`).subscribe(
      data => {
        this.job = data;
      },
      error => {
        console.error('Error fetching job details:', error);
      }
    );
  }
  applyForJob() {
    alert('Application submitted for: ' + this.job.JobTitle);
    // You can call a backend API here to handle applications
  }

  applicant = {
    name: '',
    email: ''
  };
  
  submitApplication() {
    const application = {
      job_id: this.job.id,
      applicant_name: this.applicant.name,
      applicant_email: this.applicant.email
    };
  
    this.http.post('https://jobhub-backend-wlfu.onrender.com/apply-job', application).subscribe(
      res => {
        alert('Application submitted successfully!');
      },
      err => {
        alert('Failed to apply. Try again.');
        console.error(err);
      }
    );
  }
}
