import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  monthList = [
    {
      title : '월',
      value : ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
