import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  Output
} from '@angular/core';
import { AccountDataService } from '../../../core/service/data-pages/account/account-data.service';
import { CURRENCY } from '../../../core/global-constant/app.config';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'emitter-adhere-table',
  templateUrl: './adhere-table.component.html',
  styleUrls: ['./adhere-table.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AdhereTableComponent {
  @Input('type') type;
  @Input('data') data;
  @Input('isViewModalInput') isViewModalInput;
  @Output('viewModal') viewModalEmitter = new EventEmitter<any>();

  constructor(
    @Inject( CURRENCY ) public currencyInfo: BehaviorSubject<any>,
    @Inject(LOCALE_ID) public locale: string,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
  ) { }

  viewModal(xCondition, xReviewData, xOrderId) {
    this.viewModalEmitter.emit({ condition : xCondition, item: xReviewData, orderId : xOrderId });
  }

  completePurchase(xOrderId, xProductSlug, index, itemIndex) {
    this.accountDataService.completePurchaseData( xOrderId, xProductSlug).subscribe( response => {
      this.data.results[index].items[itemIndex] = response;
      this.cd.markForCheck();
    }, error => {
      console.log(error);
    });
  }

  returnPurchase(xOrderId, xProductSlug, index, itemIndex) {
    this.accountDataService.returnPurchaseData( xOrderId, xProductSlug).subscribe( response => {
      this.data.results[index].items[itemIndex] = response;
      this.cd.markForCheck();
    }, error => {
      console.log(error);
    });
  }

  cancelPurchase(xOrderId, xProductSlug, index, itemIndex) {
    this.accountDataService.cancelPurchaseData( xOrderId, xProductSlug).subscribe( response => {
      this.data.results[index].items[itemIndex] = response;
      this.cd.markForCheck();
    }, error => {
      console.log(error);
    });
  }

  openTraceDelivery(xTracingUrl) {
    const temp = xTracingUrl.indexOf('test') > -1 ? 'http://' + xTracingUrl.substring(xTracingUrl.indexOf('test') + 5, xTracingUrl.length) :  xTracingUrl;
    window.open( temp, '_blank', 'width:750, height:500');
  }




}
