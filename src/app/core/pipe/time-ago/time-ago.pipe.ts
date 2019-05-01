import {
  Pipe,
  PipeTransform,
  NgZone,
  ChangeDetectorRef,
  OnDestroy, Inject, LOCALE_ID
} from '@angular/core';

// MUST TODO : 크리스가 말한. 한국 날짜는 어떻게 잡히는지 피드백 필요
@Pipe({
  name: 'timeAgo',
  pure: true
})

export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer: number;

  // 지역에 따라 다르게한다고함. 언어에 따라 URL 다르게가 아님
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(LOCALE_ID) public locale: string,
  ) {

  }

  transform(value: string) {

    this.removeTimer();
    const d = new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const weeks = Math.round(Math.abs(days / 7));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));

    // var locale = "en-us";
    // var month = dateToday.toLocaleString(locale, {month: "long"});
    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return this.locale === 'en' ? 'a few seconds ago' : '방금 전';
    } else if (seconds <= 90) {
      return this.locale === 'en' ? 'a minute ago' : '1분 전';
    } else if (minutes <= 45) {
      return this.locale === 'en' ? minutes + ' minutes ago' : minutes + '분 전';
    } else if (minutes <= 90) {
      return this.locale === 'en' ?  'an hour ago' : '1시간 전';
    } else if (hours <= 22) {
      return this.locale === 'en' ? hours + ' hours ago' : hours + '시간 전';
    } else if (hours <= 36) {
      return this.locale === 'en' ? 'a day ago' : '어제';
    } else if (hours <= 60) {
      return this.locale === 'en' ? days + ' days ago' : '그저께';
    } else if (days <= 6) {
      return this.locale === 'en' ? days + ' days ago' : days + '일 전';
    } else if (days <= 13) {
      return this.locale === 'en' ? 'a week ago' : '1주 전';
    } else if (days <= 29) {
      return this.locale === 'en' ? weeks + ' weeks ago' : weeks + '주 전';
    // } else if (days <= 45) {
    //   return this.locale === 'en' ? d.toLocaleString('en-us', {month : 'short' }) + ' ' + (d.getDate())  : (d.getMonth() + 1) + '월 ' + (d.getDate()) + '일';
    } else if (days <= 345) {
      return this.locale === 'en' ? d.toLocaleString('en-us', {month : 'short'}) + ' ' + (d.getDate()) : (d.getMonth() + 1) + '월 ' + (d.getDate()) + '일';
    } else {
      return this.locale === 'en' ? d.toLocaleString('en-us', {month : 'short' }) + ' ' + (d.getDate()) + ', ' + d.getFullYear()  : d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + (d.getDate()) + '일';
    }
    // } else if (days <= 545) {
    //   return this.locale === 'en' ? d.toLocaleString('en-us', {month : 'short' }) + ' ' + (d.getDate()) + ', ' + d.getFullYear()  : d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + (d.getDate()) + '일';
    // } else { // (days > 545)
    //   return years + ' years ago';
    // }
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private getSecondsUntilUpdate(seconds: number) {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }
}
