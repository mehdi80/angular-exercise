import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-corse-2';

  courses = COURSES;
  @ViewChild(HighlightedDirective)
  highlighted!: HighlightedDirective;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>;

  onToggel(isHighlighted: boolean) {
    console.log(isHighlighted)
  }

  ngAfterViewInit() {
    console.log(this.highlighted)
  }

  onCourseCelected(course: Course) {
  }
}
