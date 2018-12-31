import {
  AfterViewInit,
  Component,
  Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from './core/store/app.reducer';
import {TryGetAuthUser} from './core/store/auth/auth.actions';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
  RouterEvent
} from '@angular/router';
import {
  GetCategoryAll, UpdateCategory,
  UpdateUrlActive
} from './core/store/ui/ui.actions';
import {UiService} from './core/service/ui/ui.service';
import {TryGetCartInfo} from './core/store/cart/cart.actions';
import {CATEGORY_MAP} from './app.config';

@Component({
  selector: 'onpicks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'onpicks';
  isCategoryLoaded = false;
  categoryLoadType = '';
  uiState$;
  constructor(
    @Inject(CATEGORY_MAP) public categoryMap,
    @Inject(LOCALE_ID) public locale: string,
    private store: Store<AppState>,
    private router: Router,
    private uiService: UiService,
  ) {
    this.uiService.postLanguageSetting();
    this.store.dispatch(new TryGetAuthUser());
    this.store.dispatch(new TryGetCartInfo());

    this.uiState$ = this.store.pipe(select( 'ui')).subscribe( val => {
      this.isCategoryLoaded = val.currentCategoryList.isLoaded;
      this.categoryLoadType = val.currentCategoryList.type;
    })
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationEnd) {

      const url = this.router.url.split('/');
      const slug =  url[url.length - 1];

      this.store.dispatch(new UpdateUrlActive(url));

      // category가 /c/안에 url일경우
      if ( url[2] !== 'c' ) { return; };

      // twoDepth
      // example : shops/c/pantry/house
      if ( url.length >= 5 ) {

        if ( this.isCategoryLoaded && this.categoryLoadType === url[3] ) {
          // this.store.dispatch(new UpdateCategory({ secondSortKey :  url[4] }));
          this.store.dispatch(new UpdateCategory({ secondSortKey : url[4], thirdSortKey:  url[5] }));
        } else {
          this.store.dispatch(new GetCategoryAll({  data: '', type : url[3], firstSortKey: this.categoryMap[url[3]], secondSortKey : url[4], thirdSortKey : url[5] }));
        }


        return ;
      }


      // if ( url.length === 6 ||  url.length === 7) {
      //
      //   if ( this.isCategoryLoaded ) {
      //     this.store.dispatch(new UpdateCategory({ secondSortKey : url[4], thirdSortKey:  url[5] }));
      //   } else {      // threeDepth // fourDepth
      //     // example : shops/c/pantry/house/ads
      //     // example : shops/c/pantry/house/ads/asd
      //     this.store.dispatch(new GetCategoryAll({  data: '', type : 'cpage', firstSortKey: this.categoryMap[url[3]], secondSortKey : url[4], thirdSortKey : url[5] }));
      //   }
      //
      //   return;
      // }
    }

    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      // this._hideSpinner()
    }

    if (event instanceof NavigationError) {
      // this._hideSpinner()
    }
  }

  ngOnDestroy() {
    this.uiState$.unsubscribe();
  }

  ngOnInit() {
    // TODO : 해당 아래코드를 AppComponent OnInit에 하지 말고, App.Module의 FactoryProvider를 통해 가능한지 ?
    console.log(this.locale);
    if ( this.locale !== 'ko' ) {
      require( 'style-loader!./../assets/scss/typography/typography.ko.scss');
    } else {
      require( 'style-loader!./../assets/scss/typography/typography.en.scss');
    }
  }

  ngAfterViewInit() {

  }
}



// TODO :
/*
*
* RayKim [8:21 PM]
메모 : Product Detail 페이지에서 Helful 처리방법

RayKim [9:48 PM]
메모 : api.onpicks.com 안될수도 있다

RayKim [10:22 PM]
메모 : review blind ui 필요

메모 : 하트 (좋아요) 마우스 오버시 ui필요
메모 : 이미 누른 helpful ui필요
메모 : Comment 클릭시, ui필요 ( product detail페이지 )
메모 : chart 줄어들었을때 mouse hover시 ui변경 필요
메모 : category select시, 하단 및 상단 화살표 아이콘 필요
메모 : carousel 참고 필요 -> 연속 클릭이 되면서, 다시 돌아오는 ui -> 속도 빠르게 할수밖에 없는것 말고.  airbnb처럼 천천히 가면서
* */





