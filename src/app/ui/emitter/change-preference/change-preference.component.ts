import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiService} from '../../../core/service/ui/ui.service';
import {HttpClient} from '@angular/common/http';
import { CURRENCY, RESPONSIVE_MAP } from '../../../app.config';
import {BehaviorSubject} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';

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

  isSecondBreakPoint = false;




  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private breakpointObserver:  BreakpointObserver,
    private store: Store<any>,
    private eRef: ElementRef,
    private uiService: UiService,
    private httpClient: HttpClient,
    private renderer: Renderer2
  ) {

  }

  ngOnInit() {
    this.currency.subscribe( value => {
      console.log(value);
    });


    this.breakpointObserver
      .observe([this.responsiveMap['sb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSecondBreakPoint = true;
        } else {
          this.isSecondBreakPoint = false;
        }
      });

  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.isSecondBreakPoint ) { return; }
    if ( this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.isShowModal = false;
    }
  }

  changePreference(xPreferenceCode) {

    if ( this.isSecondBreakPoint ) {
      this.renderer.removeClass(document.body, 'u-open-modal');
    }

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



        break;

      case 'locale' :
        this.isShowModal = false;

        break;
    }
  }

  nonCompareFunction( a, b ) {
    return 0;
  }


  showModal() {
    this.isShowModal = !this.isShowModal;
    this.showEvent.emit();
    if ( this.isSecondBreakPoint ) {
      this.renderer.addClass(document.body, 'u-open-modal');
    }
  }

}
