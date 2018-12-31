import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'onpicks-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class OrdersDetailComponent implements OnInit {


  queryParams$;

  constructor(
    private route: ActivatedRoute,
    private
  ) {
    this.queryParams$ = this.route.queryParams.subscribe(
      query => {
        console.log(query[4]);
      }
    );
  }

  ngOnInit(){

  }

}
