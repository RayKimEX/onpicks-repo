import {ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'emitter-change-preference',
  templateUrl: './change-preference.component.html',
  styleUrls: ['./change-preference.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ChangePreferenceComponent implements OnInit {

  @Input('type') type;

  isShowModal = false;

  preferenceList = {
    locale : {
      title : '언어를 선택해주세요',
      list : {
        en : 'English',
        ko : '한국어'
      }
    },
    currency : {
      title : '통화를 선택해주세요',
      list : {
        dollar : '미국 달러 - $',
        won : '한국 원 - ₩',
      }
    }
  }




  constructor(
    private store: Store<any>,
    private eRef: ElementRef,
  ) {

  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
      // console.log('clicked inside');
    } else {
      this.isShowModal = false;
    }
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

  ngOnInit() {
    // console.log(this.type);
    // console.log(this.preferenceList[this.type]);
    // console.log(this.preferenceList[this.type]);
    // console.log(this.preferenceList[this.type].title);
    // console.log(this.preferenceList[this.type].list);
  }
  showModal() {
    this.isShowModal = !this.isShowModal;
  }
}
