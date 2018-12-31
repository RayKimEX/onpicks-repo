import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {select, Store} from '@ngrx/store';
import {OrderDataService} from '../../../../../../core/service/data-pages/order/order-data.service';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class DeliveryAddressComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChildren('inputSearchBox' ) inputSearchBox;

  @ViewChild('inputRecipientName', { read : ElementRef }) inputRecipientName;
  @ViewChild('inputRecipientNumber', { read : ElementRef }) inputRecipientNumber;
  @ViewChild('inputZipnumber', { read : ElementRef }) inputZipnumber;
  @ViewChild('inputJuso', { read : ElementRef }) inputJuso;
  @ViewChild('inputDetailJuso', { read : ElementRef }) inputDetailJuso;

  deliveryData$
  deliveryData = [];
  searchState = 0;
  numbers;
  isShowSearchBox = false;
  isShowDeliveryView = false;
  isShowDeliveryModal = false;


  updateDeliveryIndex = 0;
  
  searchFirst$;
  searchLast$;

  searchInputFirstEvent$;
  searchInputLastEvent$;

  jusoList;


  pageData$;
  userStore$;
  userStore;

  constructor(
    private httpClient: HttpClient,
    private renderer: Renderer2,
    private accountService: AccountDataService,
    private orderDataService: OrderDataService,
    private store: Store<any>,
    private cd: ChangeDetectorRef
  ) {
    this.userStore$ = this.store.pipe( select( state => state.auth.user) )
      .subscribe( user => {
        this.userStore = user;
        console.log(this.userStore);
        this.deliveryData$ = this.orderDataService.getDeliveryData(this.userStore.id)
          .pipe(
            map( value => value['results'] ),
            tap( v => {
              this.deliveryData = v;
              this.numbers = this.deliveryData;
              console.log(this.deliveryData);
              if ( v.length > 0 ) {
                this.isShowDeliveryView = false;
              }

            }),
          );
      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.searchLast$.unsubscribe();
    this.searchFirst$.unsubscribe();
  }

  ngAfterViewInit() {
    this.searchInputFirstEvent$ = fromEvent(this.inputSearchBox.first.searchInputBox.nativeElement, 'input');
    this.searchInputLastEvent$ = fromEvent(this.inputSearchBox.last.searchInputBox.nativeElement, 'input');
    console.log(this.inputSearchBox);

    // TODO : 20정도가 딱 적당하게 바로바로 반응함.
    this.searchFirst$ = this.searchInputFirstEvent$.pipe(
      debounceTime(80),
      distinctUntilChanged(),
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),
      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '10')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        // @ts-ignore
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>('http://www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val['results'].juso ),
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
      this.cd.markForCheck();
    });

    // TODO : 20정도가 딱 적당하게 바로바로 반응함.

    this.searchLast$ = this.searchInputLastEvent$.pipe(
      debounceTime(80),
      distinctUntilChanged(),
      map( (val: KeyboardEvent) => val.target),
      map( (val: HTMLInputElement) => val.value),
      map( val => new HttpParams()
        .set('currentPage', '0')
        .set('countPerPage', '10')
        // onpicks-search-box에서 발생하는 이벤트는, InputEvent가 아니고 그냥 Event이기 때문에,
        // 같은 값이 아니므로 아래와 같이 3항 연산자를 씀
        // @ts-ignore
        .set('keyword', val === undefined ?  '' : val )
        .set('confmKey', 'U01TX0FVVEgyMDE4MTAwNTE1NDIxNTEwODIxNDQ=')
        .set('resultType', 'json')),
      // json으로 바꿔주기 위해 flatMap 사용
      flatMap( (val: HttpParams) =>
        this.httpClient.get<any>('http://www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
      ),
      map( val => val['results'].juso ),
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
      this.cd.markForCheck();
    });
  }

  getCurrentText(event) {
    console.log(this.inputJuso);
    this.renderer.setProperty(this.inputJuso.nativeElement.children[0], 'value', event.target.innerText);
    this.renderer.setProperty(this.inputZipnumber.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.nativeElement, 'display', 'none' );
  }

  updateDeliveryInfo() {
    const temp = {
      'id': this.deliveryData[this.updateDeliveryIndex].id,
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': 'hellocity',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': this.deliveryData[this.updateDeliveryIndex].default,
    }

    temp.full_name = this.inputRecipientName.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.nativeElement.children[0].value;
    this.deliveryData[this.updateDeliveryIndex] = temp;


    this.orderDataService.updateDeliveryData(
      this.userStore.id,
      this.deliveryData[this.updateDeliveryIndex].id,
      temp
    ).subscribe( v => {
      this.isShowDeliveryModal = false;
      this.cd.markForCheck();
    });
  }

  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게

    this.jusoList = [];
    this.searchState = 0;
    if( this.isShowDeliveryModal === true ){
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJuso.nativeElement.children[0].value !== ''  ) {
          return;
        }
        this.isShowSearchBox = true;

        this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'block' );

        this.inputSearchBox.first.inputTag.nativeElement.focus();
      } else {
        if ( xParam === 'input' ) {
          return;
        }
        this.isShowSearchBox = false;
        this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
      }
    } else {
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJuso.nativeElement.children[0].value !== ''  ) {
          return;
        }
        this.isShowSearchBox = true;

        this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'block' );
        console.log(this.inputSearchBox);
        this.inputSearchBox.last.inputTag.nativeElement.focus();
      } else {
        if ( xParam === 'input' ) {
          return;
        }
        this.isShowSearchBox = false;
        this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
      }
    }
  }

  removeDeliveryInfo(index) {
    if ( index === 0  ) { alert( '기본 배송지는 삭제할 수 없습니다. '); return;}
    alert()
    this.orderDataService.deleteDeliveryData( this.userStore.id, this.deliveryData[index].id )
      .subscribe( v => {
        this.deliveryData.splice(index , 1);
        // this.deliveryData = this.deliveryData.slice(1, index);
        this.deliveryData$ = of(this.deliveryData);
        this.cd.markForCheck();
      });
  }

  exitModifyDeliveryModal() {
    this.isShowDeliveryModal = false;
    this.isShowSearchBox = false;

    this.renderer.setProperty( this.inputRecipientName.nativeElement.children[0], 'value', '');
    this.renderer.setProperty( this.inputJuso.nativeElement.children[0], 'value', '');
    this.renderer.setProperty( this.inputDetailJuso.nativeElement.children[0], 'value', '');
    this.renderer.setProperty( this.inputZipnumber.nativeElement.children[0], 'value', '');
    this.renderer.setProperty( this.inputRecipientNumber.nativeElement.children[0], 'value', '');
  }

  showModifyDeliveryModal(index) {
    this.isShowDeliveryModal = true;
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
    this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    this.updateDeliveryIndex = index;

    this.renderer.setProperty(this.inputRecipientName.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].full_name);
    this.renderer.setProperty( this.inputJuso.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_1);
    this.renderer.setProperty( this.inputDetailJuso.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_2);
    this.renderer.setProperty( this.inputZipnumber.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].zip_code);
    this.renderer.setProperty( this.inputRecipientNumber.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].phone_number);

    this.cd.markForCheck();
  }

  addDeliveryInfo() {
    const JSON_deliveryInfo = this.setDeliveryInfo();

    this.orderDataService.addDeliveryData(this.userStore.id, JSON_deliveryInfo).subscribe( v => {
      console.log(v);

      this.deliveryData.push(v);
      this.isShowDeliveryView = false;
      this.cd.markForCheck();
    });
  }

  setDeliveryInfo() {
    const temp = {
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': 'hellocity',
      'state': '',
      'phone_number': '',
      // default를 false로 주던 true로주던 값이 API에서 허용 안되도록 막힘
      'default': false
    }

    temp.full_name = this.inputRecipientName.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.nativeElement.children[0].value;
    return temp;
  }
}
