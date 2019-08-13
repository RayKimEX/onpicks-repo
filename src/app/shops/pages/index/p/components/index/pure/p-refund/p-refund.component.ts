import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import * as MenuActions from '../../../../store/p.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'p-refund',
  templateUrl: './p-refund.component.html',
  styleUrls: ['./p-refund.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PRefundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomLine') bottomLine;

  Interval_menuPosition;
  currentMenuPosition;
  previousMenuPosition;
  intervalCount = 0;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnDestroy() {
    clearInterval(this.Interval_menuPosition);
  }

  ngAfterViewInit() {

    // TODO: 이 부분이 현재, 맨처음 로딩시 계산으로 하는형식이 생각처럼 잘 되지 않음. 그래서 interval 형식으로 dynamic하게 계산
    this.Interval_menuPosition = setInterval( () => {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = this.bottomLine.nativeElement.getBoundingClientRect();
      const temp = elemRect.top - bodyRect.top;
      this.currentMenuPosition = temp;

      if (this.previousMenuPosition === this.currentMenuPosition) {
        this.intervalCount++;
        if (this.intervalCount >= 3) {
          clearInterval(this.Interval_menuPosition);
        }
        return;
      }

      this.store.dispatch(new MenuActions.UpdateMenuPosition(this.currentMenuPosition));
      this.previousMenuPosition = this.currentMenuPosition;
    }, 500);
  }
}
