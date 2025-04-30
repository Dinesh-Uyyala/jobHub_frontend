import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileformApplicantComponent } from './profileform-applicant.component';

describe('ProfileformApplicantComponent', () => {
  let component: ProfileformApplicantComponent;
  let fixture: ComponentFixture<ProfileformApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileformApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileformApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
