import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input, isDevMode, LOCALE_ID,
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
import {PREFERENCE_MAP} from '../../../core/global-constant/app.locale';

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

  isDesktopBreakPoint = false;

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    @Inject(PREFERENCE_MAP) public preferenceList,
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
  if (isDevMode()) {
    document.cookie = cname + '=' + cvalue + ';path=/';
  } else {
    document.cookie = cname + '=' + cvalue + ';domain=.onpicks.com;path=/';
  }

  return 'KRW';
}
