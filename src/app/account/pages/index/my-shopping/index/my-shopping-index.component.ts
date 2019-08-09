import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'onpicks-my-shopping-index',
  templateUrl: './my-shopping-index.component.html',
  styleUrls: ['./my-shopping-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class MyShoppingIndexComponent {

  url$;

  constructor(
    private store: Store<any>,
  ) {
    this.url$ = this.store.pipe(
      select(state => state.ui.activeUrl),
    );
  }
}
