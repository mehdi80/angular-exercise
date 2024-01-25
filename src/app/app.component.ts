import { Component } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  courses$!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    console.log(this.coursesService)


    this.courses$ = this.coursesService.loadCourse()
  }

}
