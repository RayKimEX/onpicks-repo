import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  popularCategory = [
    {
      imgSrc : 'https://picsum.photos/168/168?image=55',
      name : '식품·생활용품',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=60',
      name : '뷰티',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=65',
      name : '패션',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=70',
      name : '홈·데코',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=75',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=80',
      name : '유아동',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=70',
      name : '홈·데코',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=75',
      name : '가전·디지털',
    },
    {
      imgSrc : 'https://picsum.photos/168/168?image=80',
      name : '유아동',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
