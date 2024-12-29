import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseAdComponent } from './course-ad/course-ad.component';
import { CourseCtaComponent } from './course-cta/course-cta.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { CourseStatsComponent } from './course-stats/course-stats.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseAdComponent,CourseCtaComponent,CourseDescriptionComponent,CourseHeaderComponent, CourseStatsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course';
}
