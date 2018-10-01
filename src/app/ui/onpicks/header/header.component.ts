import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->
  // ㅁㄴㅇㄹㄴㅁㅇㄹ
  constructor() {
  }

  ngOnInit() {
  }
}



