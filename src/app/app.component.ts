import { Component, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-corse-2';

  courses = COURSES;

  @ViewChild('cardRef1') Card1!: CourseCardComponent;

  @ViewChild('cardRef2') Card2!: CourseCardComponent;


  onCourseCelected(course: Course) {
    console.log("card1", this.Card1)
    console.log("card2", this.Card2)
  }
}
