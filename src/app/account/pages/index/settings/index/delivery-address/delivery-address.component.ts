import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, flatMap, map} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChild('inputSearchBox' ) inputSearchBox;
  @ViewChild('inputZipnumber') inputZipnumber;
  @ViewChild('inputJuso') inputJuso;

  deliveryList = [
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : true,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,ㅌㅈ
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // }

  ]
  searchState = 0;
  numbers;
  isShowSearchBox = false;
  search$;
  jusoList;


  constructor(
    private httpClient: HttpClient,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.numbers = Array(Math.ceil( this.deliveryList.length / 3)).fill(4).map((x, i) => i + 1);
    console.log(this.numbers);
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  ngAfterViewInit() {
    const event$ = fromEvent(this.inputSearchBox.searchInputBox.nativeElement, 'input');

    // TODO : 20정도가 딱 적당하게 바로바로 반응함.
    this.search$ = event$.pipe(
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

    this.inputJuso.value = event.target.innerText;
    this.inputZipnumber.value = event.target.getAttribute('data-zipnumber');
    this.isShowSearchBox = false;

  }

  showSearchBox() {
    this.isShowSearchBox = !this.isShowSearchBox;
  }
}
