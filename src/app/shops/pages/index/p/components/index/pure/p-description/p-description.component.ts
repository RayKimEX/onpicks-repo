import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-p-description',
  templateUrl: './p-description.component.html',
  styleUrls: ['./p-description.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PDescriptionComponent implements OnInit {
  @Input('description') description;
  @Input('location') location;

  shopsBannerImage = {
    imgSrc : 'https://img.onpicks.com/assets/beauty_banner1.jpg',
    // marginLeftForText : '6.2%',
    title : [
      '모든 피부에 적합한',
      '마법같은 토너 세이어스'
    ],
    titleFontType : 'h2-regular',
    description : [
      '170년 전통의 미국 오리지널 위치하젤 토너 전문 브랜드',
      '피부타입과 취향에 따라 골라쓰는 재미를 느껴보세요.'
    ],
    descriptionFontType : 'subtitle-1-regular'
  };

  constructor() { }

  ngOnInit() {
  }

}
