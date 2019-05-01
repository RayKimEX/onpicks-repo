import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class RefundComponent implements OnInit {


  contentHeight = '';
  constructor() { }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

}
