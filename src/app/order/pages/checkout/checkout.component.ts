import {
  ChangeDetectionStrategy,
  Component, Inject,
  OnInit,
} from '@angular/core';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) { }

  ngOnInit() {
  }

}

