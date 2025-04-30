import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { JobDetailsComponent } from './job-details/job-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostedJobsListComponent } from './posted-jobs-list/posted-jobs-list.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ApplicantRegisterComponent } from './applicant-register/applicant-register.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { EditJobslistComponent } from './edit-jobslist/edit-jobslist.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { ProfileformApplicantComponent } from './profileform-applicant/profileform-applicant.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthService } from './auth.service';
// import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RegistrationComponent,
    JobsListComponent,
    JobDetailsComponent,
    PostJobComponent,
    PostedJobsListComponent,
    UserSelectionComponent,
    EmployerRegisterComponent,
    ApplicantRegisterComponent,
    EmployerDashboardComponent,
    ApplicantProfileComponent,
    EditJobslistComponent,
    ApplicantDashboardComponent,
    ProfileformApplicantComponent,
    EditProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    
   


  ],
  providers:  [AuthService],  
  bootstrap: [AppComponent, ],  

})
export class AppModule { }

