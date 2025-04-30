import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent implements OnInit {
  userEmail: string | null = '';
  hasActiveRoute: boolean = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');

    if (!this.userEmail) {
      alert("User not logged in");
      this.router.navigate(['/login']);
    }
  }

  onRouteActivate() {
    this.hasActiveRoute = true;
    this.cdRef.detectChanges(); // Fixes the ExpressionChangedAfterItHasBeenCheckedError
  }
}
