import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {CURRENCY} from '../../../../../../../../core/global-constant/app.config';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
  selector: 'onpicks-p-other-sellers',
  templateUrl: './p-other-sellers.component.html',
  styleUrls: ['./p-other-sellers.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class POtherSellersComponent implements OnInit {
  sellersData: Observable<{}>;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
  ) { }

  ngOnInit() {
    this.sellersData = this.getAsyncData().pipe(share());
  }

  getAsyncData() {
    return of({
      timestamp: new Date('2019-06-12 18:20:00'),
      sellers: [
        {
          seller: '11번가',
          price: 40000,
          shipping_fee: 5000,
          offset: 0
        },
        {
          seller: '메이시스 코리아',
          price: 38500,
          shipping_fee: 8000,
          offset: 1500
        },
        {
          seller: '쿠팡',
          price: 42000,
          shipping_fee: 5000,
          offset: 2000
        }
      ]
    });
  }
}
