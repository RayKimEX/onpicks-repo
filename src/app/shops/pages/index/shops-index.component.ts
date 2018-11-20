import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss']
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {



  shopsBannerImages = [
    'https://picsum.photos/1920/440?image=120',
    'https://picsum.photos/1920/440?image=200',
    'https://picsum.photos/1920/440?image=130',
    'https://picsum.photos/1920/440?image=210',
  ]

  popularCategory = [
    {
      imgSrc : 'https://picsum.photos/168/168?image=55',
      name : '식품·생활용품',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=60',
      name : '뷰티',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=65',
      name : '패션',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=70',
      name : '홈·데코',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=75',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=80',
      name : '유아동',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=70',
      name : '홈·데코',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=75',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=80',
      name : '유아동',
    },
  ]


  // MUST TODO : Login관련 pycharm과 연관지어 작업하기, image folder convention지정
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('i`ve loadded!! ');
  }
}


