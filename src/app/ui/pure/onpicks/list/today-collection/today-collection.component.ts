import {
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

import shave from 'shave';

@Component({
  selector: 'onpicks-today-collection',
  templateUrl: './today-collection.component.html',
  styleUrls: ['./today-collection.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TodayCollectionComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('shaveDiscription') shaveDiscription;

  todayCollection = [
    {
      imgSrc : 'http://img.onpicks.com/index-collections-paleo.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '팔레오 다이어트',
      todayDiscription: '건강&체중을 한 번에! 수천년 전에 인간 사냥꾼 조상이 먹은 것과 유사하도록 고안된 구석기 다이어트...',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '미국 유기농 인증마크 USDA',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-vesitable.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '채식주의자',
      todayDiscription: '더 나은 삶을 위힌 채식주의',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-vesitable.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '채식주의자',
      todayDiscription: '더 나은 삶을 위힌 채식주의',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '밀가루 무첨가 영양만점 글루텐프리',
    },
    {
      imgSrc : 'http://img.onpicks.com/index-collections-vesitable.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '채식주의자',
      todayDiscription: '더 나은 삶을 위힌 채식주의',
    }
  ]

  imageIndex = 0;
  itemListArray;

  constructor(
    private renderer: Renderer2,
  ) { }

  // shave는 나중에 하자
  // https://github.com/NetanelBasal/angular2-shave
  //
  ngOnInit() {

  }

  // TODO: 제대로 먹지 않음. dependency shave.2.5.2지우기 , 가변 처리 작업 진행하기
  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();
  }

  nextButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 288 + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 288 + 'px)');
  }

}
