import { Component } from '@angular/core';
import setting from 'src/setting';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  title = setting.title;
}
