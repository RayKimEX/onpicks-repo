import {Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {UpdateCategory} from '../../../core/store/ui/ui.actions';

@Component({
  selector: 'emitter-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss']
})

export class SearchNavigatorComponent implements OnInit, OnDestroy {
  // @Input('categoryList') categoryList;
  // @Input('result') result;
  objectKeys = Object.keys;


  result;
  storeSubscription$;
  categoryList;
  previous;


  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.storeSubscription$ = this.store.pipe(select('ui')).subscribe( val => {
      this.categoryList = val.currentCategoryList.entities;
      this.result = val.currentCategoryList.result;
      this.previous = val.currentCategoryList.previous;
      console.log(this.result);
      // console.log(val);
      // console.log(this.categoryList);
      // console.log(this.result);
    });
    const url = this.router.url.split('/');
  }

  ngOnDestroy() {
    console.log('destroyed navigator')
    this.storeSubscription$.unsubscribe();
  }

  ngOnInit() {

  }

  updateSecondCategory(index, slug) {
    const url = this.router.url.split('/')
    if (url[url.length - 1] === slug) { return; };


    this.store.dispatch(new UpdateCategory({ secondSortKey : slug }));
    this.router.navigate( ['/shops/c/pantry-and-household/' + slug], {relativeTo : this.route});
}

  updateThirdCategory(index, secondSlug, thirdSlug) {
    const url = this.router.url.split('/')
    console.log(url.length);
    // if (url[url.length - 1] === slug) { return; };

    this.store.dispatch(new UpdateCategory({ secondSortKey : secondSlug, thirdSortKey: thirdSlug }));
    // this.store.dispatch(new UpdateThirdCategory({secondSortBy : index}));
    this.router.navigate( ['/shops/c/pantry-and-household/' + secondSlug + '/' + thirdSlug], {relativeTo : this.route});
  }

  onedepthFold( dom, label ) {
    if ( dom.style.maxHeight === '3500px' ) {

      this.renderer.setStyle(label , 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');

    } else {

      this.renderer.setStyle(label , 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '3500px');
    }
  }

  twodepthFold( dom, label ) {
    if ( dom.style.maxHeight === '700px' ) {
      this.renderer.setStyle(label , 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');


    } else {
      this.renderer.setStyle(label , 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '700px');

    }
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

}
