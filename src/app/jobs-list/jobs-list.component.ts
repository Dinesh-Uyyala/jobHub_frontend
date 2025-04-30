import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>('https://jobhub-backend-wlfu.onrender.com/jobs').subscribe(
      (response) => {
        if (response.success) {
          this.jobs = response.data;
        } else {
          console.warn("No jobs found:", response.message);
        }
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }
  viewDetails(id: number): void {
    this.router.navigate(['/job-details', id]);
  }
}
