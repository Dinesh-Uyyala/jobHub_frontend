import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profileform-applicant',
  templateUrl: './profileform-applicant.component.html',
  styleUrls: ['./profileform-applicant.component.css']
})
export class ProfileformApplicantComponent  implements OnInit{
  user = {
    name: '',
    email: '',
    phone: '',
    education:'',
    skills: '',
    Resume:''
  };
constructor(private http:HttpClient){ }
ngOnInit(): void {
  
} 


  saveProfile() {
    console.log('User Data:', this.user);
    this.http.post("https://jobhub-backend-wlfu.onrender.com/create-profile",(this.user)).subscribe(response=>{
      console.log(response)
  })
}
}
