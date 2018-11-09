import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import * as MenuActions from './store/p.actions';
import {select, Store} from '@ngrx/store';
import * as fromP from './store/p.reducer';


@Component({
  selector: 'onpicks-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.scss']
})
export class PComponent implements OnInit, AfterViewInit {

  popupReviewsUI$;

  constructor(
    private store: Store<fromP.State>
  ) {
    this.popupReviewsUI$ = this.store.pipe( select( (state: fromP.State) => state.popupReviews ));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
