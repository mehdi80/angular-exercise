import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input()
  course!: Course;
  @Input()
  cardIndex!: number;

  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService,
    @Attribute('type') private type: string) {
    console.log("constructor", this.course)
  }


  ngOnInit() {
    console.log("ngOnInit", this.course)
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }
  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description })
  }

  onTitleChange(newTitle: string) {
    this.course.description = newTitle;
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
