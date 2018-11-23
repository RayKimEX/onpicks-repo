import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-written-reviews',
  templateUrl: './written-reviews.component.html',
  styleUrls: ['./written-reviews.component.scss']
})
export class WrittenReviewsComponent implements OnInit {

  currentList = [
    {
      name: 'Chris',
      starRating: '3.7',
      profileImg : 'http://img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: '1. 내구성 튼튼합니다! 옷 넉넉히 걸립니다! ' +
        '2. 디자인 제가 한샘에서 일하는 직원인데, 실제 한샘이나 일룸에서 판매하는 드레스룸 헹거랑 별반 차이 없습니다. 굿굿 ' +
        '3. 가격 아주 최상 굿... 사실 가격때문에 고민하지 않고 샀습니다. 왠만한 브랜드들 가격대가 기본 50-100만원 합니다...ㄷㄷ ' +
        '4. 배송 추석연휴 낀거 치고 빨랐고, 설치 기사님 너무 착하셨어요.. 자리 배치도 원...',
      helpfulCount : 10,
      regitDate : '2018-08-25T09:02:10.391695Z',
      comments : [
        {
          author : 'John',
          content : 'My point is, you just gotta try them for yourself.',
        },
        {
          author : 'Chris',
          content : 'My point is, you just gotta try them for yourself.',
        },
        {
          author : 'John',
          content : 'My point is, you just gotta try them for yourself.',
        }
      ]
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'http://img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'http://img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: '리뷰들 다 살펴보고 구매했어서 장단점 알고있었구요 배송이 일단 매우빨랐고 오자마자 사용해봤는데 ' +
        '손잡이쪽에 모터가 있어서 많이 무겁다는데 솔찍히 여자지만 그렇게 무겁지는않았어요 소리는 빨아들이는게 쎈만큼 크기는하지만 성능좋습니다 ' +
        '그리도 디자인도 이뻐요 너무 마음에듭니다 감사해요ㅎㅎ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'http://img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Vestibulum placerat non eros nec congue. Fusce convallis turpis sed risus laoreet efficitur. Etiam at malesuada mi, ut sodales urna. Aenean accumsan ante sed nisl sodales facilisis. Maecenas at vehicula lorem. ',
      helpfulCount : 3,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
