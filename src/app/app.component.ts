import { Component, Inject, OnInit, } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

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
      description: 'ngOnChanges'
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
