import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdComponent } from './course-ad.component';

describe('CourseAdComponent', () => {
  let component: CourseAdComponent;
  let fixture: ComponentFixture<CourseAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
