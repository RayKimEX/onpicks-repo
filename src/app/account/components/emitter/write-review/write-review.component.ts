import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostListener,
  SimpleChanges,
  OnChanges, Renderer2, ChangeDetectorRef, OnDestroy, ViewChild
} from '@angular/core';
import {AccountDataService} from '../../../../core/service/data-pages/account/account-data.service';

@Component({
  selector: 'onpicks-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WriteReviewComponent implements OnInit, OnChanges {
  @Input('isShow') isShow = false;
  @Input('data') data;
  @Output('exit') exitEvent = new EventEmitter()
  @ViewChild('reviewTextView') reviewTextView;
  imageFileList: { file, blobData }[] = [];
  errorStatus = 0;
  totalFileSize = 0;
  viewDragArea = true;
  isDraggedEnter = false;
  starRating = 0;

  constructor(
    private renderer: Renderer2,
    private accountDataService: AccountDataService,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {

    if ( changes.isShow.currentValue === true ) {
      this.renderer.addClass(document.body , 'u-open-modal');
    } else {
      this.renderer.removeClass(document.body, 'u-open-modal');
    }

    console.log(changes);
    // console.log(changes.data !== undefined );
    // console.log(changes.data.currentValue.orderData);
    // console.log(changes.data.currentValue.orderData !== undefined );
    if ( changes.data.currentValue !== undefined && changes.data !== undefined && changes.data.currentValue.orderData !== undefined ) {
      this.accountDataService.getPendingReviewData(changes.data.currentValue.orderData['product'], changes.data.currentValue.orderData['review'])
        .subscribe( v => {
          v.pictures.forEach( item => {
            this.imageFileList.push({file : '', blobData : item});
            console.log(item);
            this.cd.markForCheck();
          });
        });
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

    console.log('dragEneter');
  }

  dragLeave() {
    this.isDraggedEnter = false;
    console.log('dragLeave');
  }

  @HostListener('drop', ['$event'])
  dropOnPage(event) {
    event.preventDefault();
  }

  @HostListener('dragover', ['$event'])
  dragOverOnPage(event) {
    console.log('dragover!!')
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
      console.log(this.imageFileList);

      console.log(this.data);
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
    console.log(index);
    this.errorStatus = 0;
    this.viewDragArea = true;
    this.imageFileList.splice(index , 1);
    console.log(this.imageFileList);
  }

  publishReview( xProductSlug, xReviewId ){
    // xProductSlug, xReviewId, xRating, xText
    console.log(this.reviewTextView.nativeElement.value);

    this.accountDataService.publishReviewData(xProductSlug, xReviewId, this.starRating, this.reviewTextView.nativeElement.value).subscribe( v => console.log(v))
  }
}
