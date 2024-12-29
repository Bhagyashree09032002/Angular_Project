import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpringdemoService } from '../springdemo.service';

@Component({
  selector: 'app-course-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent implements OnInit{
  showMore = false;

toggleReadMore() {
  this.showMore = !this.showMore;
}
name:any[]=[]

  
    courseOutcomes: any[] = [];
  
    constructor(private courseOutcomeService: SpringdemoService) { }
  
    ngOnInit(): void {
      this.courseOutcomeService.getNames().subscribe(data => {
        this.courseOutcomes = data;
      });
    }
}
