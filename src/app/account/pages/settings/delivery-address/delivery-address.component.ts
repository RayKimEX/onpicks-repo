import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  deliveryList = [
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : true,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // },
    // {
    //   name : '장원석',
    //   zipCode : '04799',
    //   address1 : '서울특별시 성동구 성수일로 8길 59',
    //   address2 : '평화빌딩 B동 7층',
    //   phoneNumber : '010-9999-9999',
    //   isDefault : false,
    // }

  ]
  numbers;
  constructor() { }

  ngOnInit() {
    this.numbers = Array(Math.ceil( this.deliveryList.length / 3)).fill(4).map((x, i) => i + 1);
    console.log(this.numbers);
  }

}
