import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpicks-p-product-report',
  templateUrl: './p-product-report.component.html',
  styleUrls: ['./p-product-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PProductReportComponent implements OnInit {


  foldFlag = false;

  constructor() { }

  ngOnInit() {
  }

}
