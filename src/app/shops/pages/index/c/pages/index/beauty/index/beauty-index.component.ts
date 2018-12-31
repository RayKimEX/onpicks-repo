import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-beauty',
  templateUrl: './beauty-index.component.html',
  styleUrls: ['./beauty-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class BeautyIndexComponent implements OnInit {
  pantryAndHouseHoldBannerImages = [
    'https://picsum.photos/1920/440?image=990',
    'https://picsum.photos/1920/440?image=970',
    'https://picsum.photos/1920/440?image=965',
    'https://picsum.photos/1920/440?image=960',
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
