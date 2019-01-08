import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'ui-progressive-bar',
  templateUrl: './progressive-bar.component.html',
  styleUrls: ['./progressive-bar.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProgressiveBarComponent implements OnInit, AfterViewInit {
  @Input('outerWidth') outerWidth;
  @Input('progressWidth')
  set progressWidth( xWidth ) {
    setTimeout( v => {
      this.width = xWidth;
      this.cd.markForCheck();
    }, 0);

  };

  width = '0%';
  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // [ngStyle]="{ 'width' : progressWidth }"
  }

}
