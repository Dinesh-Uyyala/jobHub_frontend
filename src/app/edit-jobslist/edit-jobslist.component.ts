import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-jobslist',
  templateUrl: './edit-jobslist.component.html',
  styleUrls: ['./edit-jobslist.component.css']
})
export class EditJobslistComponent implements OnInit {
  job: any = {
    JobTitle: '',
    Location: '',
    Qualification: '',
    Skills: '',
    JobDescription: ''
  };
  jobId: string | null = null;
  loading: boolean = true; // ✅ Add this to fix the error

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');

    if (this.jobId) {
      this.getJobDetails(this.jobId);
    } else {
      console.error("No job ID provided");
      this.loading = false;
    }
  }

  getJobDetails(id: string) {
    this.http.get<any>(`https://jobhub-backend-wlfu.onrender.com/get-job/${id}`)
      .subscribe(
        (data) => {
          this.job = data;
          this.loading = false; // ✅ Hide loading after fetching data
        },
        (error) => {
          console.error("Error fetching job details:", error);
          this.loading = false;
        }
      );
  }

  updateJob() {
    if (!this.jobId) {
      console.error("No job ID found");
      return;
    }
  
    this.http.put(`https://jobhub-backend-wlfu.onrender.com/update-job/${this.jobId}`, this.job)
      .subscribe(
        () => {
          alert("Job updated successfully!");
          this.router.navigate(['/posted-jobs-list']);
        },
        (error) => {
          console.error("Error updating job:", error);
        }
      );
  }

  cancelEdit() {
    this.router.navigate(['/posted-jobs-list']);
  }
}
