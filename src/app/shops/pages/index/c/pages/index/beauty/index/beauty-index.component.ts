import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-beauty',
  templateUrl: './beauty-index.component.html',
  styleUrls: ['./beauty-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class BeautyIndexComponent implements OnInit {
  pantryAndHouseHoldBannerImages = [
    {
      imgSrc : 'https://img.onpicks.com/assets/beauty_banner3.jpg',
      // marginLeftForText : '6.2%',
      title : [],
      description : []
    }
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/pantry-category1.jpg',
      name : '스킨케어',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category2.jpg',
      name : '헤어',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category3.jpg',
      name : '향수',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category4.jpg',
      name : '메이크업',
    },
    {
      imgSrc : 'http://img.onpicks.com/pantry-category5.jpg',
      name : '바디',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
