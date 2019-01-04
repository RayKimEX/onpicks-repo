import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {

  }


  viewModal(xParam, xItem, xOrderId) {
    this.viewModalEmitter.emit({ param : xParam, data: xItem, orderId : xOrderId });
    console.log(xItem);
  }

}
