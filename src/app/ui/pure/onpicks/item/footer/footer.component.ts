import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {


  isShowMobileToggleBusinessInfo = false;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  toggleMobileBusinessInfo() {
    this.isShowMobileToggleBusinessInfo = !this.isShowMobileToggleBusinessInfo;
    this.cd.markForCheck();
  }

}
