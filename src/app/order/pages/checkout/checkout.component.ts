import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {fromEvent, Observable, of, pipe} from 'rxjs';
import {
  catchError,
  debounce,
  debounceTime,
  distinctUntilChanged,
  flatMap,
  map, mapTo,
  mergeMap,
  mergeMapTo,
  skip,
  switchMap, tap
} from 'rxjs/operators';

@Component({
  selector: 'onpicks-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  @ViewChild('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChild('inputSearchBox') inputSearchBox;
  @ViewChild('inputZipnumber') inputZipnumber;
  @ViewChild('inputJuso') inputJuso;


  deliveryOption = [
    {
      title : '배송시 요청 사항 (선택사항)',
      value : 0
    },
    {
      title : '90 days',
      value : 1
    },
  ]

  // MUST TODO : 이미지 안보인는건 src를 초기화 해서 memory낭비 적게 하기
  shoppingbagList = [
    {
      infoImgSrc: 'https://picsum.photos/112/112?image=180',
      infoBrand : '알엑스바',
      infoName : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      infoOption : '',
      // MUST TODO : 가격에 대한 데이터 형식이 어떻게 들어가고 있는지 여쭤 보기
      infoPrice : '40,900원'
    },
    {
      infoImgSrc: 'https://picsum.photos/112/112?image=140',
      infoBrand : '알엑스바',
      infoName : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      infoOption : '카카오 다크초콜릿',
      infoPrice : '40,900원'
    },
    {
      infoImgSrc: 'https://picsum.photos/112/112?image=160',
      infoBrand : '알엑스바',
      infoName : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
      infoOption : '사이즈: 라지 · 컬러:블랙',
      infoPrice : '40,900원'
    }
  ]

  isShowSearchBox = false;
  params: HttpParams;
  jusoList;

  // 0 : init
  // 1 : result
  // 2 : not searched
  searchState = 0;

  constructor(
    private renderer: Renderer2,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    // this.params = new HttpParams();
    // this.buyList = this.utilService.getBuyList();
    // this.buyList.forEach((item, index) => {
    //   this.totalProductPrice += (item.currentPrice * item.amount);
    //   this.deliveryPrice += ( item.deliveryPrice );
    // });
    // this.totalPrice = this.totalProductPrice + this.deliveryPrice;
  }

  showSearchBox() {

    if ( this.isShowSearchBox === false ) {
      this.isShowSearchBox = true;
      this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'block' );
    } else {
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'none' );
    }
  }

  ngAfterViewInit() {

    const event$ = fromEvent(this.inputSearchBox.searchInputBox.nativeElement, 'input');

    // TODO : 20정도가 딱 적당하게 바로바로 반응함.
    event$.pipe(
      debounceTime(80),
      distinctUntilChanged(),
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),

      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '20')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>('http://www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val.results.juso ),
    ).subscribe(val => {
      if ( val !== null ) {

        if ( val.length === 0 ) {
          this.searchState = 2;
        } else {
          this.searchState = 1;
        }
      } else {
        this.searchState = 0;
      }

      this.jusoList = val;
    } );

  }

  getCurrentText(event) {

    this.renderer.setProperty(this.inputJuso.nativeElement, 'value', event.target.innerText)
    this.renderer.setProperty(this.inputZipnumber.nativeElement, 'value', event.target.getAttribute('data-zipnumber'))
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'none' );

  }
}
