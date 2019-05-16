import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('온픽스, 건강하고 아름다운 삶을 위한 선택');
  }

  ngOnInit() {
  }

}
