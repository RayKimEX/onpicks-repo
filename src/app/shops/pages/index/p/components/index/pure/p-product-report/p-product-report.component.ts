import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject
} from '@angular/core';
import {CATEGORY_REPORT_MAP} from '../../../../../../../../core/global-constant/app.category-database-long';

@Component({
  selector: 'onpicks-p-product-report',
  templateUrl: './p-product-report.component.html',
  styleUrls: ['./p-product-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PProductReportComponent {

  foldFlag = false;
  categoryCode = null;

  @Input('categoryCode') set _categoryCode(xData) {
    this.categoryCode = xData;
  }

  constructor(
    @Inject(CATEGORY_REPORT_MAP) public categoryReportMap,
  ) { }
}
