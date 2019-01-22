import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountDataService} from '../../../core/service/data-pages/account/account-data.service';

@Component({
  selector: 'emitter-adhere-table',
  templateUrl: './adhere-table.component.html',
  styleUrls: ['./adhere-table.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AdhereTableComponent implements OnInit {
  @Input('type') type;
  @Input('data') data;
  @Input('isViewModalInput') isViewModalInput;
  @Output('viewModal') viewModalEmitter = new EventEmitter<any>();

  constructor(
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit() {

  }


  viewModal(xCondition, xItem, xOrderId) {
    this.viewModalEmitter.emit({ condition : xCondition, item: xItem, orderId : xOrderId });
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
      console.log('returned');
      console.log(response);
      this.cd.markForCheck();
    }, error => {
      console.log(error);
    });
  }

  cancelPurchase(xOrderId, xProductSlug, index, itemIndex) {
    this.accountDataService.cancelPurchaseData( xOrderId, xProductSlug).subscribe( response => {
      this.data.results[index].items[itemIndex] = response;
      console.log('canceled');
      console.log(response);
      this.cd.markForCheck();
    }, error => {
      console.log(error);
    });
  }



}
