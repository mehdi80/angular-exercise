import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, InjectionToken, Injector, inject } from '@angular/core';
import { Course } from './model/course';
import { Observable, config } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  courses!: Course[];

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.coursesService.loadCourse().subscribe(courses => {
      this.courses = courses;

      this.cd.markForCheck()
    });
  }

  onEditeCourse() {
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved')
      )
  }
}
