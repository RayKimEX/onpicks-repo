import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { normalize, schema } from 'normalizr';

@Component({
  selector: 'onpicks-page-grocery',
  templateUrl: './page-grocery.component.html',
  styleUrls: ['./page-grocery.component.scss']
})
export class PageGroceryComponent implements OnInit, OnDestroy {

  storeSubscription$;

  categoryList;
  result;
  constructor(
    private store: Store<any>,

  ) {


  }

  normalizedData;

  ngOnDestroy() {
  }

  ngOnInit() {



  }

}
