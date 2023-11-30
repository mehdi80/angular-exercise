import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-corse-2';

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  onCourseCelected(course: Course) {
    console.log("App component - clicked event bubled", course)
  }
}
