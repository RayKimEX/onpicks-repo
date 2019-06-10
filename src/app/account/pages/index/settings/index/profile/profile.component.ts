import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, LOCALE_ID, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {DisplayAlertMessage } from '../../../../../../core/store/ui/ui.actions';
import {tap} from 'rxjs/operators';
import {BreakpointState} from '../../../../../../../../node_modules/@angular/cdk/layout';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ProfileComponent implements OnInit, OnDestroy {

  // sortList = [
  //   {title: '인기순', value: 'most_popular'},
  //   // { title : '판매량', value : 'most_popular' },
  //   {title: '리뷰 많은순', value: 'most_reviewed'},
  //   {title: '평점순', value: 'top_rated'},
  //   {title: '가격 높은순', value: 'price_high'},
  //   {title: '가격 낮은순', value: 'price_low'}
  // ]
  monthList = {
    title : '월',
    list : [
    ]
  };
  monthListEn = {
    title : 'Month',
    list : [
      { title : 'January', value : '01'},
      { title : 'February', value : '02'},
      { title : 'March', value : '03'},
      { title : 'April', value : '04'},
      { title : 'May', value : '05'},
      { title : 'June', value : '06'},
      { title : 'July', value : '07'},
      { title : 'August', value : '08'},
      { title : 'September', value : '09'},
      { title : 'October', value : '10'},
      { title : 'November', value : '11'},
      { title : 'December', value : '12'},
    ]
  };

  yearList = {
    title : '년',
    list : [

    ]
  }

  dayList = {
    title : '일',
    list : [

    ]
  }

  formData = {
    'nickname': '',
    'contact': '',
    'gender': '',
    'height': '',
    'weight': ''
  }

  dateData = {
    year : '',
    month : '',
    day : '',
  }

  readonly EMPTY_ORDER_NAME = 0b00000000001;
  readonly EMPTY_DATE = 0b00000000010;

  @ViewChild('nickname', { read: ElementRef}) nickname;
  @ViewChild('email', { read: ElementRef}) email;
  @ViewChild('password', { read: ElementRef}) password;
  @ViewChild('tel', { read: ElementRef}) tel;
  @ViewChild('height', { read: ElementRef}) height;
  @ViewChild('weight', { read: ElementRef}) weight;

  userStore$;
  userStore;

  profileData$;
  profileData;
  errorStatus = 0;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    private store: Store<any>,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
  ) {

    setTimeout(() => {
        if ( locale === 'ko') {
          for ( let i = 0 ; i < 80 ; i ++) {
            this.yearList.list.push({ title : ((2005 - i) + '년'), value : (2005 - i) });
          }

          for ( let i = 1 ; i < 32 ; i ++) {
            const formattedNumber = ('0' + i).slice(-2);
            this.dayList.list.push({ title : ((i) + '일'), value : (formattedNumber) });
          }

          for ( let i = 1 ; i < 13 ; i ++ ) {
            const formattedNumber = ('0' + i).slice(-2);
            this.monthList.list.push({ title : (i) + '월', value : (formattedNumber) });
          }
        } else {
          for ( let i = 0 ; i < 80 ; i ++) {
            this.yearList.list.push({ title : ((2005 - i)), value : (2005 - i) });
          }

          for ( let i = 1 ; i < 32 ; i ++) {
            const formattedNumber = ('0' + i).slice(-2);
            this.dayList.list.push({ title : ((i)), value : (formattedNumber) });
          }
          this.monthList = this.monthListEn;
          this.dayList.title = 'Day';
          this.yearList.title = 'Year';
        }
    }, 0)


    this.userStore$ = this.store.pipe(select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        this.profileData$ = this.accountDataService
          .getProfileData(this.userStore.id)
          .pipe(
            tap( profileData => {
              if (profileData.gender !== '') {
                this.formData.gender = profileData.gender;
                this.dateData.day = profileData.birthday.split('-')[2];
                this.dateData.year = profileData.birthday.split('-')[0];
                this.dateData.month = profileData.birthday.split('-')[1];
                // this.dateData.day = profileData.birthday.substring()
              }
            }),
          );
      });
  }


  ngOnInit() {
    if (this.locale === 'en') {
    }
  }

  ngOnDestroy() {
    this.userStore$.unsubscribe();
  }

  updatePassword() {
    this.store.dispatch(new DisplayAlertMessage(this.alertMap['changes-saved'][this.locale]));
  }

  saveProfile() {

    this.errorStatus = 0;
    this.validate();
    if ( this.errorStatus !== 0 ) { return; };
    // @ViewChild('nickname', { read: ElementRef}) nickname;
    // @ViewChild('email', { read: ElementRef}) email;
    // @ViewChild('password', { read: ElementRef}) password;
    // @ViewChild('tel', { read: ElementRef}) tel;
    // @ViewChild('height', { read: ElementRef}) height;
    // @ViewChild('weight', { read: ElementRef}) weight;


    if ( this.dateData.month !== '' ||  this.dateData.day !== '' || this.dateData.year !== '') {
      this.formData['birthday'] = this.dateData.year + '-' + this.dateData.month + '-' + this.dateData.day;
    }

    this.formData['nickname'] = this.nickname.nativeElement.children[0].value;
    this.formData['contact'] = this.tel.nativeElement.children[0].value;

    this.formData['height'] = this.height.nativeElement.children[0].value;
    this.formData['weight'] = this.weight.nativeElement.children[0].value;

    this.accountDataService.saveProfileData(this.userStore.id, this.formData).subscribe( response => {
      this.store.dispatch(new DisplayAlertMessage(this.alertMap['changes-saved'][this.locale]));
    }, error => {

    });
  }

  setGender(value) {
    this.formData.gender = value.value;
  }

  setMonth(xMonth) {
    this.dateData.month = xMonth.value;
  }

  setDay(xDay) {
    this.dateData.day = xDay.value;
  }

  setYear(xYear) {
    this.dateData.year = xYear.value;
  }


  checkBitWise( data ) {

    return ((this.errorStatus & data) > 0);
  }


  validate() {
    if ( this.nickname.nativeElement.children[0].value === '') {
      this.nickname.nativeElement.children[0].focus();
      this.errorStatus += this.EMPTY_ORDER_NAME;
    }

    if ( this.dateData.month !== '' ||  this.dateData.day !== '' || this.dateData.year !== '') {
      if ( this.dateData.month === '' ) {
        this.errorStatus |= this.EMPTY_DATE;
      }
      if ( this.dateData.day === '' ) {
        this.errorStatus |= this.EMPTY_DATE;
      }
      if ( this.dateData.year === '' ) {
        this.errorStatus |= this.EMPTY_DATE;
      }
    }

    this.cd.markForCheck();
  }

  parseInt( data ) {
    return parseInt( data , 10);
  }

  changePassword(xPassword) {
    this.accountDataService.changePasswordData(this.password.nativeElement.children[0].value).subscribe( v => console.log(v));
  }
}
