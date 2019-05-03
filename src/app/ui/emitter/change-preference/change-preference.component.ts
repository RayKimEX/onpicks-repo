import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input, LOCALE_ID,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiService} from '../../../core/service/ui/ui.service';
import {HttpClient} from '@angular/common/http';
import { CURRENCY, RESPONSIVE_MAP } from '../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';
import {ShowCurrencyModal} from '../../../core/store/modal/modal.actions';

@Component({
  selector: 'emitter-change-preference',
  templateUrl: './change-preference.component.html',
  styleUrls: ['./change-preference.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class ChangePreferenceComponent implements OnInit {
  @Input('type') type;
  @Input('color') color;
  @Input('position') position; // footer or header
  @Output('showEvent') showEvent = new EventEmitter();

  isShowModal = false;

  preferenceList = {
    region : {
      title : {
        ko : '배송지역을 선택해주세요',
        en : 'Choose Shipping Destination'
      },
      list : {
        kr : {
          ko : '한국',
          en : 'Korea'
        },
        us : {
          ko : '미국',
          en : 'United States'
        }
      }
    },
    locale : {
      title : {
        ko : '언어를 선택해주세요',
        en : 'Choose Language'
      },
      list : {
        en : {
          ko : '영어',
          en : 'English'
        },
        ko : {
          ko : '한국어',
          en : 'Korean'
        }
      }
    },
    currency : {
      title : {
        ko : '통화를 선택해주세요',
        en : 'Choose Currency'
      },
      list : {
        USD : {
          ko : '미국 달러 - $',
          en : 'USD - $'
        },
        KRW : {
          ko : '한국 원 - ₩',
          en : 'KRW - ₩'
        },
      }
    }
  }

  isDesktopBreakPoint = false;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    @Inject(LOCALE_ID) public locale: string,
    private breakpointObserver:  BreakpointObserver,
    private store: Store<any>,
    private eRef: ElementRef,
    private uiService: UiService,
    private httpClient: HttpClient,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.currency.subscribe( value => {
      console.log(value);
    });

    this.breakpointObserver
      .observe([this.responsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isDesktopBreakPoint = true;
        } else {
          this.isDesktopBreakPoint = false;
        }
      });
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.isDesktopBreakPoint ) { return; }
    if ( this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.isShowModal = false;
    }
  }

  changePreference(xPreferenceCode) {

    switch (this.type) {
      case 'region' :
        setCookie('onpicks-language', xPreferenceCode === 'us' ? 'en' : 'ko');
        window.location.href = '/' + xPreferenceCode;
        break;

      case 'currency' :
        setCookie('onpicks-currency', xPreferenceCode);

        if ( this.currency.getValue() !== xPreferenceCode ) {
          window.location.reload();
        } else {
          this.isShowModal = false;
        }
        break;

      case 'locale' :
        console.log(xPreferenceCode);
        setCookie('onpicks-language', xPreferenceCode);

        if ( this.currency.getValue() !== xPreferenceCode ) {
          window.location.reload();
        } else {
          this.isShowModal = false;
        }
        break;

    }

  }

  nonCompareFunction( a, b ) {
    return 0;
  }


  showModal() {
    if ( this.isDesktopBreakPoint ) {
      this.renderer.addClass(document.body, 'u-open-modal');
      this.store.dispatch(new ShowCurrencyModal());
    } else {
      this.isShowModal = !this.isShowModal;
    }
    this.showEvent.emit();
  }
}



function setCookie(cname, cvalue ) {
  // const d = new Date();
  // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  // const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';domain=' + window.location.origin.substring(window.location.origin.indexOf('//') + 2, window.location.origin.indexOf('onpicks') - 1) + '.onpicks.com;path=/';

  return 'KRW';
}
