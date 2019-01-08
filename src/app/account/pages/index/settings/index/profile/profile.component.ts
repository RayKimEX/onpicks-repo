import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AccountDataService} from '../../../../../../core/service/data-pages/account/account-data.service';
import {DisplayAlertMessage } from '../../../../../../core/store/ui/ui.actions';
import {tap} from 'rxjs/operators';

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
  }

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
    private store: Store<any>,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
  ) {

    for ( let i = 0 ; i < 80 ; i ++) {
      this.yearList.list.push({ title : ((2005 - i) + '년'), value : (2005 - i) });
    }

    for ( let i = 1 ; i < 32 ; i ++) {
      const formattedNumber = ("0" + i).slice(-2);
      this.dayList.list.push({ title : ((i) + '일'), value : (formattedNumber) });
    }

    for ( let i = 1 ; i < 13 ; i ++ ) {
      const formattedNumber = ("0" + i).slice(-2);
      this.monthList.list.push({ title : (i) + '월', value : (formattedNumber) });
    }
    console.log(this.monthList);

    this.userStore$ = this.store.pipe(select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        this.profileData$ = this.accountDataService
          .getProfileData(this.userStore.id)
          .pipe(
            tap( profileData => {
              console.log(profileData)
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

  }

  ngOnDestroy() {
    this.userStore$.unsubscribe();
  }

  updatePassword() {
    this.store.dispatch(new DisplayAlertMessage('저장되었습니다.'));
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

    console.log( this.nickname.nativeElement.value);
    console.log( this.nickname.nativeElement.children[0].value );

    this.formData['nickname'] = this.nickname.nativeElement.children[0].value;
    // data['avatar'] = this.nickname.nativeElement.value;
    this.formData['contact'] = this.tel.nativeElement.children[0].value;

    // data['gender'] = this.nickname.nativeElement.children[0].value;
    // data['birthday'] = this.nickname.nativeElement.children[0].value;

    this.formData['height'] = this.height.nativeElement.children[0].value;
    this.formData['weight'] = this.weight.nativeElement.children[0].value;

     // dateTemp.set
     //  {
     //  'nickname': '만기님',
     //  'avatar': '',
     //  'contact': '+821091796420',
     // 'gender': 'M',
     //  'birthday': '1980-05-12',
     // 'height': '182',
     // 'weight': '79'
     //  }


    this.accountDataService.saveProfileData(this.userStore.id, this.formData).subscribe( response => {
      this.store.dispatch(new DisplayAlertMessage('프로필이 저장되었습니다.'));
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
    console.log(this.errorStatus);
  }

  parseInt( data ){
    console.log(data);
    return parseInt( data , 10);
  }
}
