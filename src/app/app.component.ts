import { AfterViewInit, Component, ElementRef, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  @ViewChildren(CourseCardComponent, { read: ElementRef, })
  cards!: QueryList<ElementRef>;

  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.cards)
  }

  onCourseEdited() {
    this.courses.push(
      {
        id: 2,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
      }
    )
  }

  onCourseCelected(course: Course) {
  }
}
