import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'ui-angle-bracket-navigator',
  templateUrl: './angle-bracket-navigator.component.html',
  styleUrls: ['./angle-bracket-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngleBracketNavigatorComponent implements OnInit {
  @Input('verticalAlign') verticalAlign = 'text-top';

  constructor() { }

  ngOnInit() {
  }

}
