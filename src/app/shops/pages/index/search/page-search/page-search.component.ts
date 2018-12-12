import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../../../core/service/data-pages/search/search.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'onpicks-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PageSearchComponent implements OnInit {


  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  searchData$;
  ngOnInit() {
    this.searchData$ = this.route.queryParams.pipe(
      switchMap(  ( value ) => this.searchService.search(value))
    );
  }



  categoryList = {
    '식품' : {
      '스낵' : {
        '프루츠컵∙스퀴즈' : {

        },
        '칩∙프레첼' : {

        },
        '쿠키' : {

        },
        '빵∙크래커' : {

        },
        '과일∙야채스낵' : {

        },
        '프로틴∙곡물바' : {

        },
        '아이스크림콘∙토핑' : {

        },
        '육포∙건어물' : {

        },
        '견과류∙믹스' : {

        },
        '팝콘' : {

        },
        '푸딩,젤라틴' : {

        },
      },
      '음료' : {
        '차' : {

        },
        '우유' : {

        },
        'Non-Dairy Milk' : {

        },
        '주스' : {

        },
        '물' : {

        },
        '스포츠음료' : {

        },
        '청량음료' : {

        },
        '커피' : {

        },


      },
      '캔디,껌,초콜릿' : {
        '껌' : {

        },
        '캔디' : {

        },
        '디저트' : {

        },
      },
      '아침식사' : {
        '콜드시리얼' : {

        },
        '핫시리얼,오트밀' : {

        },
        '토스터페이스트리' : {

        },
        '그래놀라,무슬리' : {

        },
        '식사대용프로틴바,그래놀라바' : {

        },
      },
      '식사, 후식' : {
        '마카로니,치즈' : {

        },
        '수프' : {

        },
        '칠리,스튜' : {

        },
        '아시아식사' : {

        },
        '이탈리아식사' : {

        },
        '멕시코식사,타코' : {

        },
        '인도식사' : {

        },
        '감자,속재료' : {

        },
      },
      '주방' : {
        '양념∙향신료' : {

        },
        '소금∙후추' : {

        },
        '조미료' : {

        },
        '오일' : {

        },
        '식초' : {

        },
        '샐러드드레싱' : {

        },
        '샐러드토핑' : {

        },
        '소스∙마리네이드' : {

        },
        '샐러드∙딥스' : {

        },
        '버터' : {

        },
        '잼∙젤리' : {

        },
        '스위트스프레드' : {

        },
        '곡물분말' : {

        },
        '설탕,감미료' : {

        },
        '제빵재료' : {

        },
        '제빵분말' : {

        },
        '꿀∙시럽' : {

        }
      },
      '파스타, 파스타소스' : {
        '파스타' : {

        },
        '파스타소스' : {

        },
      },
      '통조림' : {
        '공통조림' : {

        },
        '과일통조림' : {

        },
        '해산물,육류통조림' : {

        },
        '야채통조림' : {

        },
        '토마토통조림' : {

        },
        '피클,올리브통조림' : {

        },
      },
      '제과제빵' : {
        '제빵분말' : {

        },
        '제빵재료' : {

        },
        '도우,크러스트' : {

        },
        '추출물' : {

        },
        '곡물 분말' : {

        },
        '데코레이션' : {

        },
        '마시멜로우' : {

        },
        '설탕,감미료' : {

        },
        '꿀,시럽' : {

        },
      },
      '곡물' : {
        '콩' : {

        },
        '곡물' : {

        },
        '퀴노아' : {

        },
        '쌀' : {

        },
        '쿠스쿠스' : {

        },
      },
      '해외식품' : {
        '인도요리' : {

        },
        '중식' : {

        },
        '일식' : {

        },
        '한식' : {

        },
        '아시아요리' : {

        },
        '멕시코요리' : {

        },
        '라틴요리' : {

        },
        '호주요리' : {

        },
        '유럽요리' : {

        },
      }
    }
  }

}
