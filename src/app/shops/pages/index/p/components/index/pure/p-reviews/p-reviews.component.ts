import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as MenuActions from '../../../../store/p.actions';


@Component({
  selector: 'onpicks-p-reviews',
  templateUrl: './p-reviews.component.html',
  styleUrls: ['./p-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PReviewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('lineList') lineList;
  @ViewChildren('hrLineList') hrLineList;
  @Output('updateState') updateState = new EventEmitter<any>();
  @Input('reviewAveragePoint') reviewAveragePoint;
  @Input('totalList') totalList;

  maxRow = 6;
  totalPage;
  totalCount;
  currentPage = 1;

  totalPageArray = [];
  currentList = [];

  currentMenuPositionOffset = 0;
  previousMenuPositionOffset = 0;
  menuPositionInterval;
  menuPositionCount = 0;


  starMaxList = {Star5 : 55, Star4 : 18, Star3 : 6, Star2 : 7, Star1 : 14}
  starList = {Star5 : 0, Star4 : 0, Star3 : 0, Star2 : 0, Star1 : 0}
  objectKeys = Object.keys;
  hrLineList$ ;

  //
  // reviewSortList = [
  //   {
  //     title : 'Most Helpful',
  //     value : 0
  //   },
  //   {
  //     title : 'Newest',
  //     value : 1
  //   },
  //   {
  //     title : 'Lowest to Highest',
  //     value : 2
  //   },
  //   {
  //     title : 'Highest to Lowest',
  //     value : 3
  //   }
  // ];

  reviewSortList = [
    {
      title : '추천순',
      value : 0
    },
    {
      title : '최신순',
      value : 1
    },
    {
      title : '별점 낮은순',
      value : 2
    },
    {
      title : '별점 높은순',
      value : 3
    }
  ]

  reviews$;

  constructor(
    private renderer: Renderer2,
    private store: Store<any>) {
      this.reviews$ = this.store.pipe(select((state) => state['p']['reviews']
    ));
  }

  ngOnInit() {
    this.totalCount = this.totalList.length;
    this.totalPage = this.totalCount / this.maxRow;
    this.totalPageArray =  Array(parseInt(this.totalPage, 10));
    this.totalPageArray.push(this.totalPageArray.length + 1);
    this.currentList = this.totalList.slice( 0, 6 );
  }

  ngOnDestroy() {
    if( this.hrLineList$ !== undefined ){
      this.hrLineList$.unsubscribe();
    }

    clearInterval(this.menuPositionInterval);

  }





  ngAfterViewInit() {

    // TODO: 이 부분이 현재, 맨처음 로딩시 계산으로 하는형식이 생각처럼 잘 되지 않음. 그래서 interval 형식으로 dynamic하게 계산


    this.menuPositionInterval = setInterval( () => {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = this.hrLineList.last.nativeElement.getBoundingClientRect();

      const temp = elemRect.top - bodyRect.top;
      this.currentMenuPositionOffset = temp - (( 780 - 78) - 0);

      if (this.previousMenuPositionOffset === this.currentMenuPositionOffset) {
        this.menuPositionCount++;
        if (this.menuPositionCount >= 3) {
          clearInterval(this.menuPositionInterval);
        }
        return;
      }

      this.store.dispatch(new MenuActions.UpdateMenuPosition(this.currentMenuPositionOffset));
      this.previousMenuPositionOffset = this.currentMenuPositionOffset;
    }, 500);

    // hrListList가 변화가 있을때 체크함
    this.hrLineList$ = this.hrLineList.changes.subscribe( t => {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = this.hrLineList.last.nativeElement.getBoundingClientRect();
      let offset   = elemRect.top - bodyRect.top;
      offset -= (( 780 - 50) - 0);
      this.store.dispatch( new MenuActions.UpdateMenuPosition(offset) );
    });

    let maxValue = 0;
    let basisValue = 0;

    this.lineList.forEach( (val, index) => {

      maxValue = this.starMaxList['Star' + ( 5 - index )];
      basisValue = maxValue * 0.01;
      this.renderer.setStyle(val.nativeElement, 'transition-duration', (basisValue * 5) + 's' );
      this.renderer.setStyle(val.nativeElement, 'width', 51.6 * basisValue + 'rem' );
    });
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.totalList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow )
  }

}


