import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobslistComponent } from './edit-jobslist.component';

describe('EditJobslistComponent', () => {
  let component: EditJobslistComponent;
  let fixture: ComponentFixture<EditJobslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJobslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
