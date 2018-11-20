import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'onpicks-pantry-and-household',
  templateUrl: './pantry-and-household.component.html',
  styleUrls: ['./pantry-and-household.component.scss']
})

export class PantryAndHouseholdComponent implements OnInit {

  pantryAndHouseHoldBannerImages = [
    'https://picsum.photos/1920/440?image=990',
    'https://picsum.photos/1920/440?image=970',
    'https://picsum.photos/1920/440?image=965',
    'https://picsum.photos/1920/440?image=960',
  ]

  popularPantryCategory = [
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category1.jpg',
      name : '식품',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category2.jpg',
      name : '생활용품',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category3.jpg',
      name : '퍼스널케어',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category4.jpg',
      name : '건강',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category5.jpg',
      name : '유아동',
    },
    {
      imgSrc : 'https://s3.amazonaws.com/img.onpicks.com/pantry-category6.jpg',
      name : '반려용품',
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

  constructor(
    public route: ActivatedRoute,
  ) {

  }

  getCategoryOneDepth;
  routeSubScription$;

  ngOnInit() {
    this.routeSubScription$ = this.route.params.subscribe((params: Params) => {
      this.getCategoryOneDepth = params['categoryOneDepth'];
      console.log(this.getCategoryOneDepth);
    });
  }
}
