import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course | undefined;

  @Input()
  cardIndex!: number;

  @Output() cardClicked = new EventEmitter<Course>();

  constructor() {

  };

  ngOnInit() {

  }

  onImageVisible() {
    return this.course && this.course.iconUrl
  }

  onCourseViewed() {
    console.log('cord component - button clicked...');
    this.cardClicked.emit(this.course)
  }
}
