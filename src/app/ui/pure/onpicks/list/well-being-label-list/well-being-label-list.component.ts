import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpicks-well-being-label-list',
  templateUrl: './well-being-label-list.component.html',
  styleUrls: ['./well-being-label-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellBeingLabelListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
