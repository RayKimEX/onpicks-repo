import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {UpdateSecondCategory, UpdateThirdCategory} from '../../../../../../core/store/ui/ui.actions';

@Component({
  selector: 'onpicks-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CIndexComponent implements OnInit, AfterViewInit, OnDestroy{

  url;
  isCategoryLoaded = false;
  uiState$;
  constructor(
    private renderer: Renderer2,
    public route: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
  ) {
    this.uiState$ = this.store.pipe(select( 'ui')).subscribe( val => this.isCategoryLoaded = val.currentCategoryList.isLoaded );
    // this.renderer.insert
  }

  getCategoryOneDepth;
  routeSubScription$;
  filterViewState = false;


  // c-index페이지에서, 1depth로 갈때, categoryData를 fetch해옴
  // c-index페이지에서, 2depth로 갈때, searchData를 fetch해옴,
  // c-index페이지에서, 2depth페이지에서, 이벤트를 발생시켰을때, data를 fetch해옴

  navigateId = {
    'grocery' : 1010000,
    'household-supplies' : 1020000,
    'personal-care' : 1030000,
    'health' : 1040000,
    'baby' : 1050000,
    'pet-supplies' : 1060000,
    'office-supplies' : 1070000,
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.uiState$.unsubscribe();
  }

  ngAfterViewInit() {
    // const urlTwoDepth = this.url[this.url.length - 1]
    // console.log(this.navigateId[urlTwoDepth]);
    // this.store.dispatch(new UpdateSecondCategory({ id : this.navigateId[urlTwoDepth], seq : 1 }));

  }


  updateSecondCategory(id, slug) {
    if ( this.isCategoryLoaded ) {
      this.url = this.router.url.split('/');
      if (this.url[this.url.length - 1] === slug) { return; };
      this.store.dispatch(new UpdateSecondCategory({ secondSortKey : slug }));
    }

  }
}



