import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('온픽스, 건강하고 아름다운 삶을 위한 선택');
  }

  ngOnInit() {
  }

}
