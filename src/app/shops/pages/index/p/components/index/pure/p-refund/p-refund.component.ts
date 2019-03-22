import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as MenuActions from '../../../../store/p.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'onpicks-p-refund',
  templateUrl: './p-refund.component.html',
  styleUrls: ['./p-refund.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PRefundComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('bottomLine') bottomLine;
  constructor(
    private store: Store<any>,
  ) {

  }

  menuPositionInterval;
  currentMenuPositionOffset;
  previousMenuPositionOffset;
  menuPositionCount = 0;

  foldFlag = false;
  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.menuPositionInterval);
  }

  ngAfterViewInit() {

    // TODO: 이 부분이 현재, 맨처음 로딩시 계산으로 하는형식이 생각처럼 잘 되지 않음. 그래서 interval 형식으로 dynamic하게 계산


    this.menuPositionInterval = setInterval( () => {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = this.bottomLine.nativeElement.getBoundingClientRect();
      const temp = elemRect.top - bodyRect.top;
      this.currentMenuPositionOffset = temp;

      if (this.previousMenuPositionOffset === this.currentMenuPositionOffset) {
        this.menuPositionCount++;
        if (this.menuPositionCount >= 3) {
          clearInterval(this.menuPositionInterval);
        }
        return;
      }

      this.store.dispatch(new MenuActions.UpdateMenuPosition(this.currentMenuPositionOffset));
      this.previousMenuPositionOffset = this.currentMenuPositionOffset;
    }, 500);


  }

}
