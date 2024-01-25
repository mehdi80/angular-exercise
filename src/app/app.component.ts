import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  courses$!: Observable<Course[]>;

  constructor(private http: HttpClient,
    private coursesService: CoursesService) {

  }

  ngOnInit() {
    console.log(this.coursesService)
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10")

    this.courses$ = this.http.get<Course[]>('http://localhost:9000/api/courses', { params })
  }

}
