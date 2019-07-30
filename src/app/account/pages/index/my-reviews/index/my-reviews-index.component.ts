import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-my-reviews-index',
  templateUrl: './my-reviews-index.component.html',
  styleUrls: ['./my-reviews-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyReviewsIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
