import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-p-thumbnail',
  templateUrl: './p-thumbnail.component.html',
  styleUrls: ['./p-thumbnail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PThumbnailComponent implements OnInit, OnDestroy {
  @Input('imagesLargeList') imagesLargeList;
  @Input('imagesSmallList') imagesSmallList;

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
