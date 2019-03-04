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

  openBizCommPop(xWrkrNo) {
    window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=' + xWrkrNo, 'mark', 'scrollbars=no,resizable=no,width=700,height=750');
  }

  toggleMobileBusinessInfo() {
    this.isShowMobileToggleBusinessInfo = !this.isShowMobileToggleBusinessInfo;
    this.cd.markForCheck();
  }

  inicisOpen(xFlag) {
    if ( xFlag === 'inicis') {
      window.open('https://mark.inicis.com/mark/popup_v1.php?mid=onpicks001', 'mark', 'scrollbars=no,resizable=no,width=565,height=683');
    } else {
      window.open('https://mark.inicis.com/mark/escrow_popup.php?mid=onpicks001', 'mark', 'scrollbars=no,resizable=no,width=565,height=683');
    }
  }

}
