import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, InjectionToken, Injector, OnInit, inject } from '@angular/core';
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
export class AppComponent implements OnInit, DoCheck {

  courses!: Course[];

  loaded = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {
  }
  ngDoCheck() {
    console.log("ngDoCheck")
    if (this.loaded) {
      this.cd.markForCheck();
      console.log("call cd.markForCheck()");

    }
  }

  ngOnInit() {
    this.coursesService.loadCourse().subscribe(courses => {
      this.courses = courses;
      this.loaded = true;

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
