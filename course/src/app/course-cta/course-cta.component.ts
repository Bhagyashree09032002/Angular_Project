import { Component } from '@angular/core';

@Component({
  selector: 'app-course-cta',
  standalone: true,
  imports: [],
  templateUrl: './course-cta.component.html',
  styleUrl: './course-cta.component.css'
})
export class CourseCtaComponent {

  onEnquireNow() {
    // Implement your enquiry logic here
    alert('Enquiry submitted!'); 
    // You can replace this with a service call to send an enquiry form
  }
}
