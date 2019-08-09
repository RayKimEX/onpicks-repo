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
  ViewChild, Inject, ViewChildren, LOCALE_ID
} from '@angular/core';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';
import {UiService} from '../../../../core/service/ui/ui.service';
import {BehaviorSubject} from 'rxjs';
import {CURRENCY} from '../../../../core/global-constant/app.config';
import {Store} from '@ngrx/store';
import {AddClassOpenModal, DisplayAlertMessage, RemoveClassOpenModal} from '../../../../core/store/ui/ui.actions';
import * as EXIF from 'exif-js/exif';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../../core/global-constant/app.locale';

@Component({
  selector: 'onpicks-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WriteReviewComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChildren('imageViewList') imageViewList;
  @ViewChild('reviewTextView') reviewTextView;
  @Output('exit') exitEvent = new EventEmitter();
  @Output('publishReview') publishReviewEvent = new EventEmitter()
  @Input('isShow') isShow = false;
  @Input('writeReview') set data(xWriteReview) {
    if ( xWriteReview === undefined || xWriteReview.reviewData === undefined ) { return; }

    this._data = xWriteReview;
    this.imageFileList = [];
    this.accountDataService.getPendingReviewData(this._data.reviewData['product'], this._data.reviewData['review'])
      .subscribe( v => {
        v.pictures.forEach( item => {
          this.imageFileList.push({file : '', blobData : item, rotate: ''});
          this.cd.markForCheck();
        });
      });
  }

  imageFileList: { file, blobData, rotate }[] = [];
  errorStatus = 0;
  totalFileSize = 0;
  viewDragArea = true;
  isDraggedEnter = false;
  starRating = 0;
  _data;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
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
      this.store.dispatch(new AddClassOpenModal());
    } else {
      this.store.dispatch(new RemoveClassOpenModal());
    }
  }


  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
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
  dropOnPage( xEvent ) {
    xEvent.preventDefault();
  }

  @HostListener('dragover', ['$event'])
  dragOverOnPage( xEvent ) {
    xEvent.preventDefault();
  }

  dropFiles(event) {
    // const that = this;
    // event.dataTransfer.dropEffect = 'copy';

    let files = '';
    let rotate = '';
    if( event.type === 'change' ) {
      files = event.target.files;
    } else {
      files =  event.dataTransfer.files;
    }

    Object.keys(files).forEach( (key) => {
      const temp = URL.createObjectURL(files[key]);

      const that = this;
      EXIF.getData(files[key], function() {
        const orientation = EXIF.getTag(this, 'Orientation');

        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        if ( !iOS ){
          switch ( orientation ) {
            case 3:
              rotate = 'rotate(180deg)';
              break;
            case 6:
              rotate = 'rotate(90deg)';
              break;
            case 8:
              rotate = 'rotate(-90deg)';
              break;
          }
        }


        if ( that.imageFileList.length >= 10 ) {
          that.errorStatus = 1;
          that.viewDragArea = false;
          return;
        }

        that.totalFileSize += (files[key].size / 1024) / 1024;
        if ( that.totalFileSize > 20 ) {
          that.errorStatus = 2;
          that.totalFileSize -= (files[key].size / 1024) / 1024;
          return ;
        }

        that.imageFileList.push( { file : files[key], blobData : temp, rotate : rotate } );
        // this.imgSrc = temp;
        that.imageFileList.forEach(
          value => {

            if ( value.file !== '') {
              that.accountDataService.uploadReviewImage(that._data.reviewData.product, that._data.reviewData.review, value.file)
                .subscribe(
                v =>  {

                    console.log('complete!!!');
                    that.cd.markForCheck();
                  }
                );
            }
          });
      });

      that.isDraggedEnter = false;
      event.preventDefault();
    });


  }

  deleteImageFile( xIndex ) {
    this.errorStatus = 0;
    this.viewDragArea = true;
    this.imageFileList.splice( xIndex , 1);
  }

  publishReview( xProductSlug, xReviewId ) {

    this.accountDataService
      .publishReviewData(xProductSlug, xReviewId, this.starRating, this.reviewTextView.nativeElement.value)
      .subscribe(
        v => {
          console.log(v);

          this.store.dispatch(new DisplayAlertMessage(this.alertMap['review-submitted'][this.locale]));
          this.publishReviewEvent.emit();
        },
        response => {
          //
          Object.keys(response.error).forEach( (item, index ) => {
            this.store.dispatch(new DisplayAlertMessage(response.error[item]));
          });
        }
      );
    this.exitEvent.emit();
  }

  imgLoaded(event) {

  }
}
