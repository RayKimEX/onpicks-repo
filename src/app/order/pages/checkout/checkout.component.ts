import {
  ChangeDetectionStrategy,
  Component,
  Inject,
} from '@angular/core';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) { }
}

