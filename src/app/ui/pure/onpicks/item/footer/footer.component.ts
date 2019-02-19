import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {CURRENCY} from '../../../../../app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {


  isShowMobileToggleBusinessInfo = false;
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  toggleMobileBusinessInfo() {
    this.isShowMobileToggleBusinessInfo = !this.isShowMobileToggleBusinessInfo;
    this.cd.markForCheck();
  }

}
