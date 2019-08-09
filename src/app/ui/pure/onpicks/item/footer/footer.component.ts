import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID
} from '@angular/core';
import {CURRENCY, REGION_ID} from '../../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})


export class FooterComponent {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(REGION_ID) public region: string,
    @Inject(CURRENCY) public currency: BehaviorSubject<any>
  ) { }

  openBizCommPop(xWrkrNo) {
    window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=' + xWrkrNo, 'mark', 'scrollbars=no,resizable=no,width=700,height=750');
  }

  inicisOpen(xFlag) {
    if ( xFlag === 'inicis') {
      window.open('https://mark.inicis.com/mark/popup_v1.php?mid=onpicks002', 'mark', 'scrollbars=no,resizable=no,width=565,height=683');
    } else {
      window.open('https://mark.inicis.com/mark/escrow_popup.php?mid=onpicks002', 'mark', 'scrollbars=no,resizable=no,width=565,height=683');
    }
  }
}
