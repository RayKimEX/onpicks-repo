import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit
} from '@angular/core';
import {UiService} from '../../../../../../../../core/service/ui/ui.service';
import {Meta, Title} from '@angular/platform-browser';
import {IMAGE_HOST} from '../../../../../../../../core/global-constant/app.config';
import {TITLE_MAP} from '../../../../../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-beauty',
  templateUrl: './beauty-index.component.html',
  styleUrls: ['./beauty-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class BeautyIndexComponent {
  pantryAndHouseHoldBannerImages = [
    {
      imgSrc : this.imageHost + '/intro/beauty/2019-04-01/beauty1.jpg',
      imgSrcForDesktop : this.imageHost + '/intro/beauty/2019-04-01/beauty1.jpg',
      title : [],
      description : []
    }
  ]

  popularPantryCategory = [
    {
      imgSrc : this.imageHost + '/categories/category-skincare.png',
      name : {
        ko : '스킨케어',
        en : 'Skin Care'
      },
      href : '/shops/c/beauty/skin-care'
    },
    {
      imgSrc : this.imageHost + '/categories/category-hair.png',
      name : {
        ko : '헤어케어',
        en : 'Hair'
      },
      href : '/shops/c/beauty/hair-care'
    },
    {
      imgSrc : this.imageHost + '/categories/category-fragrance.png',
      name : {
        ko : '향수',
        en : 'Fragrance'
      },
      href : '/shops/c/beauty/fragrance'
    },
    {
      imgSrc : this.imageHost + '/categories/cateogry-makeup.png',
      name : {
        ko : '메이크업',
        en : 'Makeup'
      },
      href : '/shops/c/beauty/makeup'
    },
    {
      imgSrc : this.imageHost + '/categories/category-body.png',
      name : {
        ko : '바디케어',
        en : 'Body Care'
      },
      href : '/shops/c/beauty/body-care'
    },
  ]

  todayCollection = [
    {
      imgSrc : {
        ko : this.imageHost + '/collections/ko/flower.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/flower.jpg?d=w528-h352'
      },
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      categoryCode : 2000000,
      todayTitle : {
        ko : '봄을 맞이하는 아이템!',
        en : 'Spring Is In the Air'
      },
      todayDiscription : {
        ko : '인간 벚꽃이 되어 당신 주변에 이른 봄을 선물하는 건 어떨까요?',
        en : 'Discover our top selection of essential spring fragrances.'
      },

      filterSlug : {
        router : 'shops/c/beauty/fragrance',
      }
    },
    {
      imgSrc : {
        ko : this.imageHost + '/collections/ko/byredo.jpg?d=w528-h352',
        en : this.imageHost + '/collections/en/byredo.jpg?d=w528-h352',
      },
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      categoryCode : 2000000,
      todayTitle : {
        ko : '페피들의 잇 아이템',
        en : 'BYREDO Must-Haves'
      },
      todayDiscription : {
        ko : '바이레도의 감성으로 북유럽의 서정적인 향기를 입어보세요',
        en : 'Shop our collection of BYREDO must-have fragrances.'
      },
      filterSlug : {
        brand : ['byredo']
      }
    }
  ]

  popularBrand$;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
    @Inject(TITLE_MAP) public titleMap: string,
    @Inject(LOCALE_ID) public locale: string,
    private uiDataService: UiService,
    private titleService: Title
  ) {
    this.titleService.setTitle(this.titleMap['beauty'][this.locale]);
    this.popularBrand$ = this.uiDataService.getPopularBrands('beauty');
  }
}
