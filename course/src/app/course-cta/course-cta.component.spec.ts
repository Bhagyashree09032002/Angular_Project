import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCtaComponent } from './course-cta.component';

describe('CourseCtaComponent', () => {
  let component: CourseCtaComponent;
  let fixture: ComponentFixture<CourseCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
