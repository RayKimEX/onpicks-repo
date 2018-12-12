import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'onpicks-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIconComponent implements OnInit {
  @Input('sizeType') sizeType;

  constructor() { }

  ngOnInit() {
  }

}
