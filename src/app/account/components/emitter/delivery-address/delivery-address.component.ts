import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectorRef,
  AfterViewInit, OnDestroy
} from '@angular/core';
import {HttpClient, HttpParams} from '../../../../../../node_modules/@angular/common/http';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';
import {OrderDataService} from '../../../../core/service/data-pages/order/order-data.service';
import {select, Store} from '@ngrx/store';
import {debounceTime, distinctUntilChanged, flatMap, map, tap} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';
import {DisplayAlertMessage} from '../../../../core/store/ui/ui.actions';

@Component({
  selector: 'emitter-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryAddressComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('inputSearchBoxOuter') inputSearchBoxOuter;
  @ViewChild('inputSearchBox', {read: ElementRef}) inputSearchBoxEL;
  @ViewChildren('inputSearchBox' ) inputSearchBox;

  @ViewChildren('inputRecipientName', { read : ElementRef }) inputRecipientName;
  @ViewChildren('inputRecipientNumber', { read : ElementRef }) inputRecipientNumber;
  @ViewChildren('inputZipnumber', { read : ElementRef }) inputZipnumber;
  @ViewChildren('inputJuso', { read : ElementRef }) inputJuso;
  @ViewChildren('inputDetailJuso', { read : ElementRef }) inputDetailJuso;

  deliveryData$
  deliveryData = [];
  searchState = 0;
  numbers;
  isShowSearchBox = false;
  isShowDeliveryView = false;
  isShowDeliveryModal = false;
  updateDeliveryIndex = 0;

  errorStatus = 0;

  searchFirst$;
  searchLast$;

  searchInputFirstEvent$;
  searchInputLastEvent$;

  jusoList;

  pageData$;
  userStore$;
  userStore;

  readonly EMPTY_ORDER_NUMBER        = 0b00000000010;
  readonly INVALID_ORDER_NUMBER      = 0b00000100000;

  readonly EMPTY_RECIPIENT_NAME      = 0b00000000100;
  readonly EMPTY_RECIPIENT_NUMBER    = 0b00000001000;
  readonly INVALID_RECIPIENT_NUMBER  = 0b00001000000;
  readonly EMPTY_DELIVERY_ADDRESS    = 0b00000010000;

  readonly EMPTY_CUSTOMS_ID_NUMBER   = 0b00010000000;
  readonly INVALID_CUSTOMS_ID_NUMBER = 0b00100000000;

  readonly EMPTY_PAYMENT_METHOD      = 0b01000000000;
  readonly EMPTY_AGREEMENT_DIRECT_BUYING = 0b10000000000;

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
    console.log(location.protocol);
    this.searchInputFirstEvent$ = fromEvent(this.inputSearchBox.first.searchInputBox.nativeElement, 'input');
    this.searchInputLastEvent$ = fromEvent(this.inputSearchBox.last.searchInputBox.nativeElement, 'input');

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
  }

  showSearchBox( xParam ) {
    // 내용이 있으면 show안되게

    this.jusoList = [];
    this.searchState = 0;
    if( this.isShowDeliveryModal === true ){
      if ( this.isShowSearchBox === false ) {
        if ( xParam === 'input' && this.inputJuso.first.nativeElement.children[0].value !== ''  ) {
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
        if ( xParam === 'input' && this.inputJuso.last.nativeElement.children[0].value !== ''  ) {
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

    temp.full_name = this.inputRecipientName.last.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.last.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.last.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.last.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.last.nativeElement.children[0].value;
    return temp;
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
  }

  showModifyDeliveryModal(index) {
    this.isShowDeliveryModal = true;
    this.isShowSearchBox = false;
    this.renderer.setStyle( this.inputSearchBoxOuter.first.nativeElement, 'display', 'none' );
    this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    this.updateDeliveryIndex = index;

    this.renderer.setProperty( this.inputRecipientName.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].full_name);
    this.renderer.setProperty( this.inputJuso.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_1);
    this.renderer.setProperty( this.inputDetailJuso.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].street_address_2);
    this.renderer.setProperty( this.inputZipnumber.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].zip_code);
    this.renderer.setProperty( this.inputRecipientNumber.first.nativeElement.children[0], 'value', this.deliveryData[this.updateDeliveryIndex].phone_number);

    this.cd.markForCheck();
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

    temp.full_name = this.inputRecipientName.first.nativeElement.children[0].value;
    temp.street_address_1 = this.inputJuso.first.nativeElement.children[0].value;
    temp.street_address_2 = this.inputDetailJuso.first.nativeElement.children[0].value;
    temp.zip_code = this.inputZipnumber.first.nativeElement.children[0].value;
    temp.phone_number = this.inputRecipientNumber.first.nativeElement.children[0].value;
    this.deliveryData[this.updateDeliveryIndex] = temp;
    this.orderDataService.updateDeliveryData(
      this.userStore.id,
      this.deliveryData[this.updateDeliveryIndex].id,
      temp
    ).subscribe( v => {


      this.exitModifyDeliveryModal();
      this.cd.markForCheck();
    }, error => {

    });
  }


  addDeliveryInfo() {

    // this.validateDeliveryInfo();

    if ( this.errorStatus === 0 ) {
      const JSON_deliveryInfo = this.setDeliveryInfo();

      this.orderDataService.addDeliveryData(this.userStore.id, JSON_deliveryInfo).subscribe(
        v => {
        console.log(v);

        this.deliveryData.push(v);
        this.deliveryData$ = of(this.deliveryData);
        this.isShowDeliveryView = false;
        this.cd.markForCheck();
      }, error => {
          if ( error.status === 502 ) {
            this.store.dispatch(new DisplayAlertMessage('서버 상태가 불안정합니다.'));
          } else {
            this.store.dispatch(new DisplayAlertMessage('빈 공간을 채워주세요.'))
          }
      });
    }
  }


  checkBitWise( data ) {
    return ((this.errorStatus & data) > 0);
  }


  validateDeliveryInfo(){

    this.errorStatus = 0;


    if ( this.inputRecipientName.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientName.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NAME;
    }

    if ( this.inputRecipientNumber.last.nativeElement.children[0].value === '') {
      if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_RECIPIENT_NUMBER;
    } else {
      const patt = new RegExp('[a-zA-Z]');
      if ( patt.test(this.inputRecipientNumber.last.nativeElement.children[0].value) ) {
        if ( this.errorStatus === 0 ) {this.inputRecipientNumber.last.nativeElement.children[0].focus();}
        this.errorStatus |= this.INVALID_RECIPIENT_NUMBER;
      }
    }

    if ( this.inputZipnumber.last.nativeElement.children[0].value === ''
      || this.inputJuso.last.nativeElement.children[0].value === ''
    ) {
      if ( this.errorStatus === 0 ) {this.inputZipnumber.last.nativeElement.children[0].focus();}
      this.errorStatus |= this.EMPTY_DELIVERY_ADDRESS;
    }
  }

  getCurrentText(event) {
    if( this.isShowDeliveryModal === true ) {
      this.renderer.setProperty(this.inputJuso.first.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumber.first.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle(this.inputSearchBoxOuter.first.nativeElement, 'display', 'none');
    } else {
      this.renderer.setProperty(this.inputJuso.last.nativeElement.children[0], 'value', event.target.innerText);
      this.renderer.setProperty(this.inputZipnumber.last.nativeElement.children[0], 'value', event.target.getAttribute('data-zipnumber'));
      this.isShowSearchBox = false;
      this.renderer.setStyle( this.inputSearchBoxOuter.last.nativeElement, 'display', 'none' );
    }
  }

  updateDeliveryDataToDefault( index ) {
    this.orderDataService.updateDeliveryDataToDefault(this.userStore.id, this.deliveryData[index].id).subscribe(
      v => {

        const temp = [];
        this.deliveryData.forEach( (value, forEachIndex) => {

          if(forEachIndex === index) {
            const valueTemp = {
              ...value,
              default : true,
            }
            temp.unshift(valueTemp);
          } else {
            const valueTemp = {
              ...value,
              default : false,
            }
            temp.push(valueTemp);
          }
        })

        this.deliveryData = temp;

        this.deliveryData$ = of(temp);

        this.cd.markForCheck();
      }
    );
  }


}
