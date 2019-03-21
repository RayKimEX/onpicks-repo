import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-terms-index',
  templateUrl: './terms-index.component.html',
  styleUrls: ['./terms-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsIndexComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('온픽스, 건강하고 아름다운 삶을 위한 선택');
  }

  ngOnInit() {
  }

}
