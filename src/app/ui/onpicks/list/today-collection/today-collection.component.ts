import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-today-collection',
  templateUrl: './today-collection.component.html',
  styleUrls: ['./today-collection.component.scss']
})
export class TodayCollectionComponent implements OnInit {

  todayCollection = [
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-collections-paleo.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '팔레오 다이어트',
      todayDiscription: '건강&체중을 한 번에! 수천년 전에 인간 사냥꾼 조상이 먹은 것과 유사하도록 고안된 구석기 다이어트...',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '미국 유기농 인증마크 USDA',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-collections-vesitable.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '채식주의자',
      todayDiscription: '더 나은 삶을 위힌 채식주의',
    }
  ]


  constructor() { }

  ngOnInit() {

  }

}
