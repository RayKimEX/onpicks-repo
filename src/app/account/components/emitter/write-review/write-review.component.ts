import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  SimpleChanges,
  OnChanges,
  Renderer2,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild, Inject
} from '@angular/core';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';
import {UiService} from '../../../../core/service/ui/ui.service';
import {BehaviorSubject} from 'rxjs';
import {CURRENCY} from '../../../../app.config';
import {Store} from '@ngrx/store';
import {DisplayAlertMessage} from '../../../../core/store/ui/ui.actions';

@Component({
  selector: 'onpicks-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WriteReviewComponent implements OnInit, OnChanges, OnDestroy {
  @Input('isShow') isShow = false;
  @Input('writeReview') set data(xWriteReview) {

    if ( xWriteReview === undefined || xWriteReview.reviewData === undefined ) { return; }

    this._data = xWriteReview;
    this.imageFileList = [];
    console.log(this._data.reviewData);
    this.accountDataService.getPendingReviewData(this._data.reviewData['product'], this._data.reviewData['review'])
      .subscribe( v => {
        v.pictures.forEach( item => {
          this.imageFileList.push({file : '', blobData : item});
          this.cd.markForCheck();
        });
      });
  }
  @Output('exit') exitEvent = new EventEmitter();
  @Output('publishReview') publishReviewEvent = new EventEmitter()
  @ViewChild('reviewTextView') reviewTextView;
  imageFileList: { file, blobData }[] = [];
  errorStatus = 0;
  totalFileSize = 0;
  viewDragArea = true;
  isDraggedEnter = false;
  starRating = 0;
  _data;

  weeklyBest$;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private renderer: Renderer2,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
    private uiService: UiService,
    private store: Store<any>
  ) {
  }

  ngOnDestroy() {
    this.imageFileList = [];
  }


  ngOnChanges(changes: SimpleChanges) {

    if ( changes.isShow.currentValue === true ) {
      this.renderer.addClass(document.body , 'u-open-modal');
    } else {
      this.renderer.removeClass(document.body, 'u-open-modal');
      console.log('@@@@@@@@@@@@@@@@remove modal 7');
    }

  }


  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.exitEvent.emit();
      this.imageFileList.length = 0;
    }
  }

  ngOnInit() {

  }


  onDragOver(files) {

    files.preventDefault();
  }

  dragEnter() {
    this.isDraggedEnter = true;

  }

  dragLeave() {
    this.isDraggedEnter = false;
  }

  @HostListener('drop', ['$event'])
  dropOnPage(event) {
    event.preventDefault();
  }

  @HostListener('dragover', ['$event'])
  dragOverOnPage(event) {
    event.preventDefault();
  }

  dropFiles(event) {
    // const that = this;
    // event.dataTransfer.dropEffect = 'copy';

    Object.keys(event.dataTransfer.files).forEach( (key) => {
      const temp = URL.createObjectURL(event.dataTransfer.files[key]);

      if ( this.imageFileList.length >= 10 ) {
        this.errorStatus = 1;
        this.viewDragArea = false;
        return;
      }

      this.totalFileSize += (event.dataTransfer.files[key].size / 1024) / 1024;
      if ( this.totalFileSize > 20 ){
        this.errorStatus = 2;
        this.totalFileSize -= (event.dataTransfer.files[key].size / 1024) / 1024;
        return ;
      }

      this.imageFileList.push({file : event.dataTransfer.files[key], blobData : temp});
      // this.imgSrc = temp;
      this.imageFileList.forEach(
        value => {

          if ( value.file !== '') {
            this.accountDataService.uploadReviewImage(this._data.reviewData.product, this._data.reviewData.review, value.file).subscribe(
              v => console.log('complete!!!')
            );
          }

        });

    });

    this.isDraggedEnter = false;
    event.preventDefault();
  }

  deleteImageFile(index) {
    this.errorStatus = 0;
    this.viewDragArea = true;
    this.imageFileList.splice(index , 1);
  }

  publishReview( xProductSlug, xReviewId ){
    // xProductSlug, xReviewId, xRating, xText

    this.accountDataService
      .publishReviewData(xProductSlug, xReviewId, this.starRating, this.reviewTextView.nativeElement.value)
      .subscribe(
        v => {
          console.log(v);

          this.store.dispatch(new DisplayAlertMessage('리뷰가 정상적으로 등록되었습니다.'));
          this.publishReviewEvent.emit();
        },
        response => {
          //
          Object.keys(response.error).forEach( (item, index ) => {
            // console.log(response.error[item]);
            this.store.dispatch(new DisplayAlertMessage(response.error[item]));
          });
        }
      );
    this.exitEvent.emit();


  }
}
