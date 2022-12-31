import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
  ]
})
export class AboutComponent {

  constructor() { }

  JumpToUsukura(event: Event) {
    event.preventDefault();
    const href = (event.target as HTMLAnchorElement).href;
    if (Math.random() < 0.2) {
      window.open(href, '_blank');
    }
  }

}
