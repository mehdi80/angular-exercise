import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { COURSES_SERVIS } from '../app.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();

  constructor(@Inject(COURSES_SERVIS) private coursesService: CoursesService) {

  }

  ngOnInit() {
    console.log("coursesService cours card", this.coursesService)
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description })
  }

  cardClasses() {
    let className;

    if (this.course.category == 'ADVANCED') {

      className = 'advanced';

    } else if (this.course.category == 'INTERMEDIATE') {

      className = 'intermediate';

    } else if (this.course.category == 'BEGINNER') {

      className = 'beginner';

    } else {

      className = ''

    }
    return className

  }
}
