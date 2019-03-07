import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {sampleTime, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';

@Component({
  selector: 'onpicks-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {



  numbers;

  imageIndex = 1000;
  body;

  scroll$;
  willLoadData = false;

  userState$;

  contentHeight = '';

  feedList = []
  feedList$;
  constructor(
    private store: Store<any>,
    private accountDataService: AccountDataService
  ) {

    this.userState$ = this.store.pipe(select( state => state.auth.user));

    this.feedList$ = this.accountDataService.getFeedListData().pipe( tap( v => console.log(v)));

    this.body = document.body;

    this.scroll$ = fromEvent(window, 'scroll').pipe(sampleTime(50))
      .subscribe( val => {
        if (((( window.scrollY + window.innerHeight ) / document.body.scrollHeight) * 100) >= 90 && !this.willLoadData) {
          this.willLoadData = true;
          this.willLoadDataFunction();
        }
      });

  }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe();
  }

  willLoadDataFunction() {
    // for ( let i = 0 ; i < 20; i ++ ) {
    //   if (this.exceptionDatabase[this.imageIndex]) { this.imageIndex -= 5;  continue; }
    //   this.feedList.push({ imgSrc : 'https://picsum.photos/264/264?image=' + this.imageIndex});
    //   this.imageIndex -= 5;
    // }

    this.willLoadData = false;
  }

}
