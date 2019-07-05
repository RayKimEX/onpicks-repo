import {Component, OnInit, ChangeDetectionStrategy, Inject, LOCALE_ID, Input} from '@angular/core';

@Component({
  selector: 'onpicks-search-content-empty',
  templateUrl: './search-content-empty.component.html',
  styleUrls: ['./search-content-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchContentEmptyComponent implements OnInit {
  @Input('term') private term: string;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) {
  }

  ngOnInit() {
  }

}
