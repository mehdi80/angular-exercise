import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Input()
  noImageTpl!: TemplateRef<any>

  @Output() cardClicked = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image!: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    // console.log(this.image)
  }

  ngOnInit() {

  }

  onImageVisible() {
    return this.course && this.course.iconUrl
  }

  onCourseViewed() {
    this.cardClicked.emit(this.course)
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
