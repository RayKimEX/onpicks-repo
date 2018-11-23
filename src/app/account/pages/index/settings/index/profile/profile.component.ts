import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  monthList = {
    title : '월',
    list : [
      {
        title : '1월',
        value : '1'
      },
      {
        title : '2월',
        value : ''
      },
      {
        title : '3월',
        value : ''
      },
      {
        title : '4월',
        value : ''
      },
      {
        title : '5월',
        value : ''
      },
      {
        title : '6월',
        value : ''
      }
    ]
  }

  yearList = {
    title : '년',
    list : [
    ]
  }

  dayList = {
    title : '일',
    list : [
      {
        title : '1일',
        value : 1
      },
      {
        title : '2일',
        value : ''
      },
      {
        title : '3일',
        value : ''
      },
      {
        title : '4일',
        value : ''
      },
      {
        title : '5일',
        value : ''
      },
      {
        title : '6일',
        value : ''
      }
    ]
  }

  constructor() {
    for ( let i = 0 ; i < 80 ; i ++) {
      this.yearList.list.push({ title : ((2005 - i) + '년'), value : 1 });
    }


    for ( let i = 0 ; i < 30 ; i ++) {
      this.dayList.list.push({ title : ((i) + '일'), value : 1 });
    }
  }


  ngOnInit() {
  }

}
