import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'emitter-adhere-table',
  templateUrl: './adhere-table.component.html',
  styleUrls: ['./adhere-table.component.scss']
})
export class AdhereTableComponent implements OnInit {
  @Input('type') type;
  @Input('isViewModalInput') isViewModalInput;
  @Output('viewModal') viewModal = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {

  }


  changeViewModal() {
    this.viewModal.emit();
  }
}
