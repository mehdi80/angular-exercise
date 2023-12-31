import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>;

  onCourseCelected(course: Course) {
  }
}
