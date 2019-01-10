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
  ViewChild
} from '@angular/core';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';
import {UiService} from '../../../../core/service/ui/ui.service';

@Component({
  selector: 'onpicks-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WriteReviewComponent implements OnInit, OnChanges {
  @Input('isShow') isShow = false;
  @Input('data') set data(xData) {

    if( xData === undefined || xData.orderData === undefined ) { return; }

    this._data = xData;
    this.accountDataService.getPendingReviewData(this._data.orderData['product'], this._data.orderData['review'])
      .subscribe( v => {
        v.pictures.forEach( item => {
          this.imageFileList.push({file : '', blobData : item});
          this.cd.markForCheck();
        });
      });
  }
  @Output('exit') exitEvent = new EventEmitter()
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
    private renderer: Renderer2,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef,
    private uiService: UiService
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if ( changes.isShow.currentValue === true ) {
      this.renderer.addClass(document.body , 'u-open-modal');
    } else {
      this.renderer.removeClass(document.body, 'u-open-modal');
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
            this.accountDataService.uploadReviewImage(this.data.orderData.product, this.data.orderData.review, value.file).subscribe(
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

    this.accountDataService.publishReviewData(xProductSlug, xReviewId, this.starRating, this.reviewTextView.nativeElement.value).subscribe( v => console.log(v))
  }
}
