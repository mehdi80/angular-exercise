import { Component, Inject, OnInit, } from '@angular/core';
import { Course } from './model/course';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  courses: Course[] = COURSES;


  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
  }

  ngOnInit() {

  }

  onEditeCourse() {
    const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnChanges',
      cardIndex: 1
    }

    this.courses[0] = newCourse;
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved')
      )
  }
}
