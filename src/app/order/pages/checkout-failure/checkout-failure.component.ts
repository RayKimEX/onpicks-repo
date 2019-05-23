import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {IMAGE_HOST} from '../../../core/global-constant/app.config';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'onpicks-checkout-failure',
  templateUrl: './checkout-failure.component.html',
  styleUrls: ['./checkout-failure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFailureComponent implements OnInit {
  queryParams$;
  failureMassage = '';

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
    private route: ActivatedRoute
  ) {
    this.queryParams$ = this.route.queryParams
      .subscribe((val: {failure_message}) => {
        this.failureMassage = val.failure_message;
      });
  }

  ngOnInit() {
  }

}
