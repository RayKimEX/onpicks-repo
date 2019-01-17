import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiService} from '../../../core/service/ui/ui.service';

@Component({
  selector: 'emitter-change-preference',
  templateUrl: './change-preference.component.html',
  styleUrls: ['./change-preference.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ChangePreferenceComponent implements OnInit {

  @Input('type') type;
  @Output('showEvent') showEvent = new EventEmitter();

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
    private uiService: UiService
  ) {

  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.isShowModal = false;
    }
  }

  changeLanguage(xLanguageCode) {
    console.log(xLanguageCode);
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

  ngOnInit() {

  }
  showModal() {
    this.isShowModal = !this.isShowModal;
    this.showEvent.emit();
  }
}
