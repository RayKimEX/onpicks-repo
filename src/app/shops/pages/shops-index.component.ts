import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-shops-index',
  templateUrl: './shops-index.component.html',
  styleUrls: ['./shops-index.component.scss']
})

export class ShopsIndexComponent implements OnInit, AfterViewInit {

  // MUST TODO : Login관련 pycharm과 연관지어 작업하기, image folder convention지정
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('i`ve loadded!! ');
  }
}


