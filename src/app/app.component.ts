import { Component } from '@angular/core';
import pages from 'src/pages';
import setting from 'src/setting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  title = setting.title;
  pages = pages;
}
