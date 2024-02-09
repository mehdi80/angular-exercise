import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, OnDestroy,
  OnChanges, AfterContentChecked, AfterViewChecked,
  AfterContentInit, AfterViewInit, DoCheck {

  @Input()
  course!: Course;
  @Input()
  cardIndex!: number;

  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService,
    @Attribute('type') private type: string) {
    console.log("constructor", this.course)
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log("ngOnInit", this.course)
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.course.description = "ngAfterContentChecked";
    this.course.category = "ADVANCED"
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
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
