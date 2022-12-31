import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name = '';
  count = 0;
  email = '';

  constructor() { }

  InputName(event: any) {
    this.name = event.target.value;
  }

  Countup() {
    this.count++;
  }

  Countdown() {
    this.count--;
  }

  InputEmail(event: any) {
    this.email = event.target.value;
  }

  ngOnInit() {
    this.name = '🦍🦍🦍';
    this.count = 0;
    this.email = 'osawa-koki@example.com';
  }
}
