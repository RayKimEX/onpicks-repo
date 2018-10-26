import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-popular-brand',
  templateUrl: './popular-brand.component.html',
  styleUrls: ['./popular-brand.component.scss']
})

export class PopularBrandComponent implements OnInit {

  popularBrand = [
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-jomalone.jpg',
      name : '조 말론'
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-hyredo.jpg',
      name : '바이레도'
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-diptyque.jpg',
      name : '딥 티크'
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-bose.jpg',
      name : '보스'
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-sony.jpg',
      name : '소니'
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/index-brand-samsung.jpg',
      name : '삼성'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
