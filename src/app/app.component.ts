import {Component, Inject, LOCALE_ID} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'onpicks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'onpicks';
  constructor(@Inject(LOCALE_ID) public locale: string) {
    console.log(this.locale);
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





