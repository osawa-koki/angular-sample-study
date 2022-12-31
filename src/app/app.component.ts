import { Component } from '@angular/core';
import pages from 'src/pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  title = 'angular-sample-study';
  pages = pages;
}
