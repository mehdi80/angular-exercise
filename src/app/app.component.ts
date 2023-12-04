import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'angular-corse-2';

  courses = COURSES;

  @ViewChild('cardRef1', { read: ElementRef }) Card1!: ElementRef;

  @ViewChild('courseImage') corseImage!: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    console.log("courseImage", this.corseImage);
  }

  onCourseCelected(course: Course) {
  }
}
