import {
  ChangeDetectionStrategy,
  Component, Inject, LOCALE_ID,
  Renderer2
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {CATEGORY_SECOND_MAP} from '../../../../../../app.config';

@Component({
  selector: 'onpicks-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CIndexComponent {

  objectKeys = Object.keys;
  constructor(
    @Inject(CATEGORY_SECOND_MAP) public secondCategoryMap,
    private renderer: Renderer2,
    public route: ActivatedRoute,
    public router: Router,
    private store: Store<any>
  ) {
    console.log(this.router.url.split('/')[3]);
  }

}



