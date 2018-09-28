import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {

    console.log(this.localeId);
  }

}
