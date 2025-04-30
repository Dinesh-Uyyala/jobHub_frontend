import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContentComponent } from './content/content.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { EmployerRegisterComponent } from './employer-register/employer-register.component';
import { ApplicantRegisterComponent } from './applicant-register/applicant-register.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { EditJobslistComponent } from './edit-jobslist/edit-jobslist.component';
import { AuthGuard } from './auth.guard';
import { PostedJobsListComponent } from './posted-jobs-list/posted-jobs-list.component';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { ProfileformApplicantComponent } from './profileform-applicant/profileform-applicant.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {path:"",component:ContentComponent},
  {path:"login", component:LoginComponent},
  {path:"registration", component:UserSelectionComponent},
  {path:"jobs-list", component:JobsListComponent},
  { path: 'job-details/:id', component: JobDetailsComponent },
  {path:"post-job", component:PostJobComponent},
  {path:"register", component:UserSelectionComponent},
  {path:'employer-dashboard', component: EmployerDashboardComponent, canActivate: [AuthGuard]},
  {path: 'applicant-dashboard', component:ApplicantDashboardComponent,canActivate: [AuthGuard]},
  {path: 'register/employer', component:EmployerRegisterComponent },
  {path: 'register/applicant', component: ApplicantRegisterComponent },
  {path: 'posted-jobs-list', component:PostedJobsListComponent},
  {path:"profileform-applicant", component:ProfileformApplicantComponent},
  {path:"edit-profile", component:EditProfileComponent},
  { path: 'employer-dashboard', component: EmployerDashboardComponent,canActivate: [AuthGuard] ,children: [
    { path: 'content', component: ContentComponent},
    {path:"post-job", component:PostJobComponent},
    {path: 'posted-jobs-list', component:PostedJobsListComponent},
    {path: 'edit-jobslist', component:EditJobslistComponent},

  ]},
  {path: 'profile', component:ApplicantProfileComponent},
  { path: "edit-jobslist/:id", component: EditJobslistComponent },
  {path: 'applicant-dashboard', component:ApplicantDashboardComponent,canActivate: [AuthGuard] ,children: [
    {path:"content", component:ContentComponent},
    {path:"find a job", component:JobsListComponent},
    { path: 'profile', component: ApplicantProfileComponent }, 
    {path:"profileform-applicant", component:ProfileformApplicantComponent},
    { path: 'edit-profile', component: EditProfileComponent }   

  ]}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

