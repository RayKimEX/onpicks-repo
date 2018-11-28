import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {sampleTime} from 'rxjs/operators';

@Component({
  selector: 'onpicks-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {

  // TODO : ㄴㅇㄹ
  feedList = []
  numbers;

  imageIndex = 1000;
  body;

  scroll$;
  willLoadData = false;

  constructor(
    private _ngZone: NgZone,
    private eRef: ElementRef
  ) {


    for ( let i = 0 ; i < 20; i ++ ) {
      if (this.exceptionDatabase[this.imageIndex]) {       this.imageIndex -= 5;  continue; }
      this.feedList.push({ imgSrc : 'https://picsum.photos/264/264?image=' + this.imageIndex});
      this.imageIndex -= 5;
    }

    this.body = document.body;
    console.log(this.body);

    this.scroll$ = fromEvent(window, 'scroll').pipe(sampleTime(50))
      .subscribe( val => {
        if (((( window.scrollY + window.innerHeight ) / document.body.scrollHeight) * 100) >= 90 && !this.willLoadData) {
          console.log(this.willLoadData);
          this.willLoadData = true;
          console.log('hello');
          this.willLoadDataFunction();
        }
      });
    // this.numbers = Array(Math.ceil( this.feedList.length / 4)).fill(4).map((x, i) => i + 1);
    // console.log(this.numbers);
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
    // this._ngZone.runOutsideAngular(() => {
    //
    //   for ( let i = 0 ; i < 20; i ++ ) {
    //     if (this.exceptionDatabase[this.imageIndex]) { this.imageIndex -= 5;  continue; }
    //     this.feedList.push({ imgSrc : 'https://picsum.photos/264/264?image=' + this.imageIndex});
    //     this.imageIndex -= 5;
    //   }
    //
    //
    //   this.willLoadData = false;
    //   this._ngZone.run(() => { console.log('Outside Done!'); });
    // });

  }




  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //
  //   // fromE
  //   // (( window.scrollY + window.innerHeight ) / document.body.scrollHeight) * 100
  //   // console.log( );
  //   console.log(document.body.scrollHeight);
  //   console.log(document.body.clientHeight);
  //   console.log(document.body.scrollTop);
  //   console.log( window.innerHeight);
  // }

  onScroll() {
    console.log('onscroll');
  }
}
