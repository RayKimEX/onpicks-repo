import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UiService} from '../../../../../../../../core/service/ui/ui.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-pantry-and-household',
  templateUrl: './pantry-and-household.component.html',
  styleUrls: ['./pantry-and-household.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PantryAndHouseholdComponent implements OnInit {

  pantryAndHouseHoldBannerImages =  [
    {
      imgSrc : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner1.jpg?d=w2576-h800',
      // marginLeftForText : '6.2%',
      title : [
        '세이어스'
      ],
      titleFontType : 'h2-regular',
      description : [
        '170년 전통의 위치하젤 토너 전문 브랜드.',
        '피부타입과 취향에 따라 골라쓰는 재미가 있는 토너.'
      ],
      descriptionFontType : 'subtitle-1-regular'
    },
    {
      imgSrc : 'https://img.onpicks.com/banners/pantry-and-household/2019-02-27/PAH-banner2.jpg?d=w2576-h800',
      // marginLeftForText : '6.2%',
      title : [
        '온가족이 사용하는',
        '유기농 화장품, 닥터 브로너스'
      ],
      titleFontType : 'h2-regular',
      description : [
        '추출물과 비교불가! 유기농 오일이 주는 피부 본연의 힘',
        '피부 자극 걱정없는 클렌징으로 안심하고 사용하세요.'
      ],
      descriptionFontType : 'subtitle-1-regular'
    },
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/categories/category-grocery.png',
      name : '식품',
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-household.png',
      name : '생활용품',
      href : '/shops/c/pantry-and-household/household-supplies'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-personalcare.png',
      name : '퍼스널케어',
      href : '/shops/c/pantry-and-household/grocery'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-health.png',
      name : '건강',
      href : '/shops/c/pantry-and-household/health'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-baby.png',
      name : '유아동',
      href : '/shops/c/pantry-and-household/baby'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-pet.png',
      name : '반려용품',
      href : '/shops/c/pantry-and-household/pet-supplies'
    }
  ]

  todayCollection = [
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-paleo.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '팔레오 다이어트',
      todayDiscription: '헐리웃 셀럽들 사이에서 hot한 건강&체중을 동시에 잡는 식이요법을 경험해보세요.',
      filterSlug : {
        value : ['paleo']
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-USDA.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : 'USDA 인증',
      todayDiscription: '깐깐하기로 소문난 United States Department of Agriculture 의 인증, Real Organic 을 소개합니다.',
      filterSlug : {
        value : [
          'organic-95', 'organic-100'
        ]
      }
    },
    {
      imgSrc : 'http://img.onpicks.com/collections/collections-gluten.jpg',
      todayCategoryName : '식품·생활용품',
      todayTitle : '글루텐프리',
      todayDiscription: '미국의 3대 글루텐프리 인증 단체인 GFCO, CSA, ACG의 인증, 미국 본토의 글루텐프리 컬렉션.',
      filterSlug : {
        value : ['certified-gluten-free']
      }
    },
  ]

  popularBrand$;

  constructor(
    public route: ActivatedRoute,
    private uiDataService: UiService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('식품·생활용품')
    // this.meta.addTag({ name: 'description', content: '프리미엄 라이프스타일' });
    this.popularBrand$ = this.uiDataService.getPopularBrands('pantry-and-household');
  }

  getCategoryOneDepth;
  routeSubScription$;

  ngOnInit() {
    this.routeSubScription$ = this.route.params.subscribe((params: Params) => {
      this.getCategoryOneDepth = params['categoryOneDepth'];
    });
  }
}
