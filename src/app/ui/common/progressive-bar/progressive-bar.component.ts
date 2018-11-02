import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-progressive-bar',
  templateUrl: './progressive-bar.component.html',
  styleUrls: ['./progressive-bar.component.scss']
})
export class ProgressiveBarComponent implements OnInit {
  @Input('outerWidth') outerWidth;
  @Input('progressWidth') progressWidth;

  constructor() { }

  ngOnInit() {
  }

}
