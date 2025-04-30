import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {
  jobs: any[] = []; // Store jobs

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.http.get<any[]>('https://jobhub-backend-wlfu.onrender.com/get-posted-jobs')
      .subscribe(
        (data) => { this.jobs = data; }, // ✅ Store jobs in the array
        (error) => { console.error("Error fetching jobs:", error); }
      );
  }
}
