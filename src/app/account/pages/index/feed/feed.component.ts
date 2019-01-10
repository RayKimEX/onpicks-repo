import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {sampleTime} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'onpicks-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {


  feedList = []
  numbers;

  imageIndex = 1000;
  body;

  scroll$;
  willLoadData = false;

  userState$;
  constructor(
    private store: Store<any>,
  ) {

    this.userState$ = this.store.pipe(select( state => state.auth.user));

    for ( let i = 0 ; i < 20; i ++ ) {
      if (this.exceptionDatabase[this.imageIndex]) {       this.imageIndex -= 5;  continue; }
      this.feedList.push({ imgSrc : 'https://picsum.photos/264/264?image=' + this.imageIndex});
      this.imageIndex -= 5;
    }

    this.body = document.body;

    this.scroll$ = fromEvent(window, 'scroll').pipe(sampleTime(50))
      .subscribe( val => {
        if (((( window.scrollY + window.innerHeight ) / document.body.scrollHeight) * 100) >= 90 && !this.willLoadData) {
          this.willLoadData = true;
          this.willLoadDataFunction();
        }
      });

  }

  ngOnDestroy() {
    this.scroll$.unsubscribe();
  }

  ngOnInit() {

  }

  exceptionDatabase = {
    920 : true,
    895 : true,
    850 : true,
  }

  willLoadDataFunction() {
    for ( let i = 0 ; i < 20; i ++ ) {
      if (this.exceptionDatabase[this.imageIndex]) { this.imageIndex -= 5;  continue; }
      this.feedList.push({ imgSrc : 'https://picsum.photos/264/264?image=' + this.imageIndex});
      this.imageIndex -= 5;
    }

    this.willLoadData = false;

  }

}
