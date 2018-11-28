import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-available-reviews',
  templateUrl: './available-reviews.component.html',
  styleUrls: ['./available-reviews.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class AvailableReviewsComponent implements OnInit {

  isViewModal = true;
  imageFileList: { file, blobData }[] = [];

  errorStatus = 0;
  totalFileSize = 0;
  viewDragArea = true;
  isDraggedEnter = false;
  constructor() { }

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

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {

    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.isViewModal = false;
    }
  }

  @HostListener('drop', ['$event'])
  dropOnPage(event) {
    console.log('drop!!')
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

      // console.log(event.dataTransfer.files[key].size);
      // console.log((event.dataTransfer.files[key].size / 1024) / 1024);

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

// <div class="row">
//   <div (drop)="dropFiles($event)" (dragover)="onDragOver($event)" class="drag-and-drop">
//
//   </div>
//   <img [src]="imgSrc | safeHtml" alt="">
//   <!--<form action="" enctype="multipart/form-data">-->
//   <!--<div class="box__input">-->
//   <!--<input class="box__file" type="file" name="files[]" id="file" multiple />-->
// <!--<label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>-->
// <!--&lt;!&ndash;<button class="box__button" type="submit">Upload</button>&ndash;&gt;-->
//     <!--</div>-->
//     <!--</form>-->
//     </div>
}
