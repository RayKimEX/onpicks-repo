import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  AfterViewInit, OnDestroy, Inject, LOCALE_ID, Input
} from '@angular/core';

import {
  HttpClient,
  HttpParams
} from '../../../../../node_modules/@angular/common/http';

import {AccountDataService} from '../../../core/service/data-pages/account/account-data.service';
import {OrderDataService} from '../../../core/service/data-pages/order/order-data.service';
import {select, Store} from '@ngrx/store';
import {debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';
import {TryAddDeliveryInfo, TryGetDeliveryInfo, TryRemoveDeliveryInfo, TryUpdateDeliveryDataToDefault, TryUpdateDeliveryInfo, UpdateDeliveryInfoSuccess} from '../../../core/store/ui/ui.actions';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../core/global-constant/app.locale';

@Component({
  selector: 'emitter-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryAddressComponent implements OnDestroy {
  @Input('userId') set _userId(xData) {
    if ( xData !== null ) {
      this.userId = xData;
      this.store.dispatch(new TryGetDeliveryInfo({ userId : this.userId} ));
    }

  };

  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChildren('inputSearchBox' ) inputSearchBox;
  @ViewChildren('inputRecipientName', { read : ElementRef }) inputRecipientNameRef;
  @ViewChildren('inputRecipientNumber', { read : ElementRef }) inputRecipientNumberRef;
  @ViewChildren('inputZipnumber', { read : ElementRef }) inputZipnumberRef;
  @ViewChildren('inputJuso', { read : ElementRef }) inputJusoRef;
  @ViewChildren('inputDetailJuso', { read : ElementRef }) inputDetailJusoRef;

  userId = 0;

  deliveryStore$ = null;
  deliveryStoreData = null;

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
  deliveryErrorStatus = 0;

  contentHeight = '';
  readonly EMPTY_RECIPIENT_NAME      = 0b00000000100;
  readonly EMPTY_RECIPIENT_NUMBER    = 0b00000001000;
  readonly INVALID_RECIPIENT_NUMBER  = 0b00001000000;
  readonly EMPTY_DELIVERY_ADDRESS    = 0b00000010000;
  readonly EMPTY_PAYMENT_METHOD      = 0b01000000000;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    private httpClient: HttpClient,
    private renderer: Renderer2,
    private accountService: AccountDataService,
    private orderDataService: OrderDataService,
    private store: Store<any>,
    private cd: ChangeDetectorRef
  ) {

    this.deliveryStore$ = this.store.select( state => state.ui.deliveryAddress )
      .subscribe( deliveryStoreData => {
          this.deliveryStoreData = deliveryStoreData;
          console.log(this.deliveryStoreData);
          //
          this.setAddressInputEvent();
          this.exitModifyDeliveryModal();
          this.cd.markForCheck();
        }
      );
  }

  ngOnDestroy() {
    this.searchLast$.unsubscribe();
    this.searchFirst$.unsubscribe();
    this.deliveryStore$.unsubscribe();
  }

  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게

    this.jusoList = [];
    this.searchState = 0;
    if ( this.isShowDeliveryModal === true ) {
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJusoRef.first.nativeElement.children[0].value !== ''  ) {
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
        if ( xParam === 'input' && this.inputJusoRef.last.nativeElement.children[0].value !== ''  ) {
          return;
        }
        this.isShowSearchBox = true;

        this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'block' );
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

  getDeliveryInfo() {
    const temp = {
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': '',
      'state': '',
      'phone_number': ''
    }

    temp.full_name = this.inputRecipientNameRef.last.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJusoRef.last.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJusoRef.last.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumberRef.last.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumberRef.last.nativeElement.children[0].value;
    return temp;
  }

  removeDeliveryInfo(index) {
    if ( index === 0  ) { alert( '기본 배송지는 삭제할 수 없습니다. '); return;}

    this.store.dispatch(new TryRemoveDeliveryInfo(
      { userId : this.userId, deliveryId : this.deliveryStoreData[index].id, dataIndex: index }
      ));
  }

  exitModifyDeliveryModal() {
    this.isShowDeliveryModal = false;
    this.isShowSearchBox = false;
  }

  showModifyDeliveryModal(index) {
    this.isShowDeliveryModal = true;
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
    this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    this.updateDeliveryIndex = index;

    this.renderer.setProperty( this.inputRecipientNameRef.first.nativeElement.children[0], 'value', this.deliveryStoreData[this.updateDeliveryIndex].full_name);
    this.renderer.setProperty( this.inputJusoRef.first.nativeElement.children[0], 'value', this.deliveryStoreData[this.updateDeliveryIndex].street_address_1);
    this.renderer.setProperty( this.inputDetailJusoRef.first.nativeElement.children[0], 'value', this.deliveryStoreData[this.updateDeliveryIndex].street_address_2);
    this.renderer.setProperty( this.inputZipnumberRef.first.nativeElement.children[0], 'value', this.deliveryStoreData[this.updateDeliveryIndex].zip_code);
    this.renderer.setProperty( this.inputRecipientNumberRef.first.nativeElement.children[0], 'value', this.deliveryStoreData[this.updateDeliveryIndex].phone_number);

    this.cd.markForCheck();
  }

  updateDeliveryInfo() {
    const temp = {
      'id': this.deliveryStoreData[this.updateDeliveryIndex].id,
      'full_name': '',
      'zip_code': '',
      'street_address_1': '',
      'street_address_2': '',
      'city': '',
      'state': '',
      'phone_number': ''
    }

    temp.full_name = this.inputRecipientNameRef.first.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJusoRef.first.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJusoRef.first.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumberRef.first.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumberRef.first.nativeElement.children[0].value;
    this.deliveryStoreData[this.updateDeliveryIndex] = temp;

    this.store.dispatch(new TryUpdateDeliveryInfo(
      {
          userId: this.userId,
          deliveryId: this.deliveryStoreData[this.updateDeliveryIndex].id,
          data: temp,
          dataIndex: this.updateDeliveryIndex
        }
      ));
  }


  addDeliveryInfo() {

    this.validate(0);

    if ( this.deliveryErrorStatus === 0 ) {
      const JSON_deliveryInfo = this.getDeliveryInfo();


      this.store.dispatch(
        new TryAddDeliveryInfo({ deliveryData: JSON_deliveryInfo, userId: this.userId, })
      );
    }
  }


  checkBitWise( data ) {
    return ((this.deliveryErrorStatus & data) > 0);
  }


  validate(errorStatus) {

    this.deliveryErrorStatus = 0;
    this.deliveryErrorStatus |= errorStatus;
    if ( this.inputRecipientNameRef.last.nativeElement.children[0].value === '') {
      if ( this.deliveryErrorStatus === 0 ) {this.inputRecipientNameRef.last.nativeElement.children[0].focus();}
      this.deliveryErrorStatus |= this.EMPTY_RECIPIENT_NAME;
    }

    if ( this.inputRecipientNumberRef.last.nativeElement.children[0].value === '') {
      if ( this.deliveryErrorStatus === 0 ) {this.inputRecipientNumberRef.last.nativeElement.children[0].focus();}
      this.deliveryErrorStatus |= this.EMPTY_RECIPIENT_NUMBER;
    } else {
      const patt = new RegExp('^(?:\\+?\\d{1,2} ?)?[ -]?\\d{2,3}[ -]?\\d{3,4}[ -]?\\d{4}$');
      if ( !patt.test(this.inputRecipientNumberRef.last.nativeElement.children[0].value) ) {
        if ( this.deliveryErrorStatus === 0 ) {this.inputRecipientNumberRef.last.nativeElement.children[0].focus();}
        this.deliveryErrorStatus |= this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputZipnumberRef.last.nativeElement.children[0].value === ''
      || this.inputJusoRef.last.nativeElement.children[0].value === ''
    ) {

      if ( this.deliveryErrorStatus === 0 ) {this.inputZipnumberRef.last.nativeElement.children[0].focus();}
      this.deliveryErrorStatus |= this.EMPTY_DELIVERY_ADDRESS;
    }

    return this.deliveryErrorStatus;
  }

  getCurrentText(event) {
    if( this.isShowDeliveryModal === true ) {
      this.renderer.setProperty(this.inputJusoRef.first.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumberRef.first.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle(this.inputSearchBoxOuter.first.nativeElement, 'display', 'none');
    } else {
      this.renderer.setProperty(this.inputJusoRef.last.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumberRef.last.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    }
  }

  updateDeliveryDataToDefault( index ) {
    this.store.dispatch(new TryUpdateDeliveryDataToDefault(
      {
        userId: this.userId,
        deliveryId: this.deliveryStoreData[index].id,
        defaultIndex : index
      }
    ));
  }

  setAddressInputEvent(){
    // 랜더링 후의 타이밍 잡기 위해 setTimeout 0초를 줌
    setTimeout(() => {

      this.searchInputFirstEvent$ = fromEvent(this.inputSearchBox.first.searchInputBox.nativeElement, 'input');
      this.searchInputLastEvent$ = fromEvent(this.inputSearchBox.last.searchInputBox.nativeElement, 'input');

      // 80정도가 딱 적당하게 바로바로 반응함.
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
          this.httpClient.get<any>(location.protocol + '//www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
        ),
        map( val => {
          console.log(val);
          return val['results'].juso;
        }),
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
          this.httpClient.get<any>(location.protocol + '//www.juso.go.kr/addrlink/addrLinkApi.do', { params: val, responseType : 'json' }, )
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
    }, 0);
  }


}
