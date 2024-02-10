import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './courses.service';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';



@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
