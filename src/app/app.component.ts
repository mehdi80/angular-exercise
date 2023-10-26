import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-corse-2';

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxjsCourse = COURSES[2];
}
