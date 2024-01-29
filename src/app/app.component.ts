import { Component, Inject, InjectionToken, Injector } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';

function coursesServiseProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVIS = new InjectionToken<CoursesService>('COURSES_SERVISE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: COURSES_SERVIS,
      useFactory: coursesServiseProvider,
      deps: [HttpClient]
    }
  ]
})
export class AppComponent {

  courses$!: Observable<Course[]>;

  constructor(@Inject(COURSES_SERVIS) private coursesService: CoursesService) {

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
