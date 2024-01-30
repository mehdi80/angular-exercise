import { Component, Inject, InjectionToken, Injector, Optional, inject } from '@angular/core';
import { Course } from './model/course';
import { Observable, config } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  courses$!: Observable<Course[]>;

  constructor(
    @Optional() private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(config);
  }

  ngOnInit() {
    console.log(this.coursesService)


    this.courses$ = this.coursesService.loadCourse()
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved')
      )
  }
}
