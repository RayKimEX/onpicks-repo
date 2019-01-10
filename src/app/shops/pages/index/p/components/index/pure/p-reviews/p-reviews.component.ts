import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter, Inject,
  Input,
  OnChanges,
  Output,
  Renderer2, SimpleChanges,
  ViewChildren
} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {REPORT_REASON_MAP} from '../../../../../../../../app.config';
import {tap} from 'rxjs/operators';
import {PDataService} from '../../../../../../../../core/service/data-pages/p/p-data.service';


@Component({
  selector: 'onpicks-p-reviews',
  templateUrl: './p-reviews.component.html',
  styleUrls: ['./p-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PReviewsComponent implements AfterViewInit {
  @ViewChildren('lineList') lineList;
  @ViewChildren('hrLineList') hrLineList;
  @Output('updateState') updateState = new EventEmitter<any>();
  @Input('reviewAveragePoint') reviewAveragePoint;
  @Input('totalList') totalList;

  isShowModal = false;

  maxRow = 6;
  totalPage;
  totalCount;
  currentPage = 1;

  totalPageArray = [];
  currentList = [];


  starMaxList = {};
  //{Star5 : 55, Star4 : 18, Star3 : 6, Star2 : 7, Star1 : 14}
  objectKeys = Object.keys;

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
    @Inject(REPORT_REASON_MAP) public reasonMap: string,
    private pDataService: PDataService,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
  ) {
    this.reviews$ = this.store.pipe(
      select((state) => state['p']['reviews']),
      tap( v => {
        if ( v.extraInfo === undefined ) { return };
        console.log(v);
        this.starMaxList = v.extraInfo.reviewRatingsDist;

        this.totalList = v.results;
        this.totalCount = this.totalList.length;
        this.totalPage = this.totalCount / this.maxRow;

        this.totalPageArray =  Array(parseInt(this.totalPage, 10));
        this.totalPageArray.push(this.totalPageArray.length + 1);
        this.currentList = this.totalList.slice( 0, this.maxRow );
      })
    );
  }


  ngAfterViewInit() {

  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.totalList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow )
  }

  voteReviews() {
    this.pDataService.voteReviewsData().subscribe( v => console.log(v));
  }


}


