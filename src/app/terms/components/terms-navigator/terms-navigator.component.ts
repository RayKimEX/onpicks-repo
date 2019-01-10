import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-terms-navigator',
  templateUrl: './terms-navigator.component.html',
  styleUrls: ['./terms-navigator.component.scss'],
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class TermsNavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
