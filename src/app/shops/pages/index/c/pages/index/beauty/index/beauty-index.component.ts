import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UiService} from '../../../../../../../../core/service/ui/ui.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-beauty',
  templateUrl: './beauty-index.component.html',
  styleUrls: ['./beauty-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class BeautyIndexComponent implements OnInit {
  pantryAndHouseHoldBannerImages = [
    {
      imgSrc : 'https://img.onpicks.com/banners/beauty/2019-04-01/beauty-banner1.jpg',
      imgSrcForDesktop : 'https://img.onpicks.com/banners/beauty/2019-04-01/beauty-banner1.jpg',
      // marginLeftForText : '6.2%',
      title : [],
      description : []
    },
    // {
    //   imgSrc : 'https://img.onpicks.com/banners/beauty/2019-04-01/beauty-banner2.jpg',
    //   // marginLeftForText : '6.2%',
    //   title : [],
    //   description : []
    // },
    // {
    //   imgSrc : 'https://img.onpicks.com/banners/beauty/2019-04-01/beauty-banner3.jpg',
    //   // marginLeftForText : '6.2%',
    //   title : [],
    //   description : []
    // },
    // {
    //   imgSrc : 'https://img.onpicks.com/banners/beauty/2019-04-01/beauty-banner4.jpg',
    //   // marginLeftForText : '6.2%',
    //   title : [],
    //   description : []
    // }
  ]

  popularPantryCategory = [
    {
      imgSrc : 'http://img.onpicks.com/categories/category-skincare.png',
      name : {
        ko : '스킨케어',
        en : 'Skin Care'
      },
      href : '/shops/c/beauty/skin-care'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-hair.png',
      name : {
        ko : '헤어케어',
        en : 'Hair'
      },
      href : '/shops/c/beauty/hair-care'
    },
    {
      imgSrc : 'http://i' +
        'mg.onpicks.com/categories/category-fragrance.png',
      name : {
        ko : '향수',
        en : 'Fragrance'
      },
      href : '/shops/c/beauty/fragrance'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/cateogry-makeup.png',
      name : {
        ko : '메이크업',
        en : 'Makeup'
      },
      href : '/shops/c/beauty/makeup'
    },
    {
      imgSrc : 'http://img.onpicks.com/categories/category-body.png',
      name : {
        ko : '바디케어',
        en : 'Body Care'
      },
      href : '/shops/c/beauty/body-care'
    },
  ]

  todayCollection = [
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-flower.jpg?d=w528-h352',
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      todayTitle : {
        ko : '봄을 맞이하는 아이템!',
        en : 'Spring is comming'
      },
      todayDiscription : '인간 벚꽃이 되어 당신 주변에 이른 봄을 선물하는 건 어떨까요?',

      filterSlug : {
        router : 'shops/c/beauty/fragrance',
      }
    },
    {
      imgSrc : 'https://img.onpicks.com/collections/collection-byredo.jpg?d=w528-h352',
      todayCategoryName : {
        ko : '뷰티',
        en : 'Beauty'
      },
      todayTitle : {
        ko : '페피들의 잇 아이템',
        en : `Peppy's eat item`
      },
      todayDiscription : '바이레도의 감성으로 북유럽의 서정적인 향기를 입어보세요',
      filterSlug : {
        brand : ['byredo']
      }
    }
  ]

  popularBrand$;

  constructor(
    private uiDataService: UiService,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('뷰티');
    // this.meta.addTag({ name: 'description', content: '유러피안 럭셔리 뷰티' });
    this.popularBrand$ = this.uiDataService.getPopularBrands('beauty');
  }

  ngOnInit() {
  }

}
