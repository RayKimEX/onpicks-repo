import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {CURRENCY} from '../../../../../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'p-other-sellers',
  templateUrl: './p-other-sellers.component.html',
  styleUrls: ['./p-other-sellers.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class POtherSellersComponent {

  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
  ) { }
}
