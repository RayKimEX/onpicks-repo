import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {RESPONSIVE_MAP} from '../../../../../app.config';

@Component({
  selector: 'onpicks-settings-index',
  templateUrl: './settings-index.component.html',
  styleUrls: ['./settings-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SettingsIndexComponent implements OnInit {

  isACTBreakPoint = false;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(RESPONSIVE_MAP) public categoryMap,
    private breakpointObserver:  BreakpointObserver,
  ) {

  }

  ngOnInit() {
    this.breakpointObserver
      .observe([this.categoryMap['actb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isACTBreakPoint = false;
          this.cd.markForCheck();
        } else {
          this.isACTBreakPoint = true;
          this.cd.markForCheck();
        }
      });
  }

}
