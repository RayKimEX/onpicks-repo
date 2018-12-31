import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-p-item-detail',
  templateUrl: './p-item-detail.component.html',
  styleUrls: ['./p-item-detail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PItemDetailComponent implements OnInit {
  @Input('description') description;

  constructor() { }

  ngOnInit() {
  }

}
