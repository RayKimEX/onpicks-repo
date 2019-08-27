import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'healthy-product-warning',
  templateUrl: './healthy-product-warning.component.html',
  styleUrls: ['./healthy-product-warning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthyProductWarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
