import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-demo',
  templateUrl: './box-demo.component.html',
  styleUrls: ['./box-demo.component.css'],
})
export class BoxDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color: string = '';
  triggerState: string = '';
  height: string = '';

  setColor(state, color) {
    this.triggerState = state;
    this.color = color;
  }
  changeHeight() {
    this.height = 'tall';
  }
  reset() {
    this.color = '';
    this.triggerState = '';
    this.height = '';
  }

}
