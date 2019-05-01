import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CreditsComponent implements OnInit {

  contentHeight = '';
  constructor() { }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

}
