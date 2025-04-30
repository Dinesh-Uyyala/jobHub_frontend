import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  job: any = {
    // employer_email:'',
    // company: '',
    // Location: '',
    // Skills: '',
    // Qualification: '',
    // companyImage: '' // Now this will store the image URL
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  postjob(){
    console.log(this.job, "You posted a job successfully!");

    this.http.post("https://jobhub-backend-wlfu.onrender.com/post-job", this.job).subscribe(
      (response) => {
        console.log('Job posted successfully:', response);
        // Optionally reset form here
        this.job = {
          // company: '',
          // Location: '',
          // Skills: '',
          // Qualification: '',
          // companyImage: ''
        };
        this.router.navigate(['/posted-jobs-list']);
      },
      (error) => {
        console.error('Error posting job:', error);
      }
    );
  }
}