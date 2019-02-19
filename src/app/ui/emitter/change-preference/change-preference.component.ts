import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiService} from '../../../core/service/ui/ui.service';
import {HttpClient} from '@angular/common/http';
import {CATEGORY_MAP, CURRENCY} from '../../../app.config';
import {BehaviorSubject} from 'rxjs';

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
        USD : '미국 달러 - $',
        KRW : '한국 원 - ₩',
      }
    }
  }




  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private store: Store<any>,
    private eRef: ElementRef,
    private uiService: UiService,
    private httpClient: HttpClient
  ) {

  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.isShowModal = false;
      console.log('55555555555');
    }
  }

  changePreference(xPreferenceCode) {
    switch (this.type) {
      case 'currency' :
        this.httpClient.post('/api/preferences/currency/', {currency : xPreferenceCode})
          .subscribe( (response) => {
              console.log(xPreferenceCode);
              this.currency.next(xPreferenceCode);
              window.location.reload();
            }
          );
        this.isShowModal = false;
        console.log('44444444444');

        break;

      case 'locale' :
        this.isShowModal = false;
        console.log('3333333333333');
        break;
    }
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

  ngOnInit() {
    this.currency.subscribe( value => {
      console.log(value);
    });
  }

  showModal() {
    this.isShowModal = !this.isShowModal;
    this.showEvent.emit();
  }

}
