import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'onpicks-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feedList = [
    {
      currentIndex : 1,
      imgSrc : 'https://picsum.photos/264/264?image=1000',
    },
    {
      currentIndex : 2,
      imgSrc : 'https://picsum.photos/264/264?image=995',
    },
    {
      currentIndex : 3,
      imgSrc : 'https://picsum.photos/264/264?image=990',
    },
    {
      currentIndex : 4,
      imgSrc : 'https://picsum.photos/264/264?image=985',
    },
    {
      currentIndex : 5,
      imgSrc : 'https://picsum.photos/264/264?image=980',
    },
    {
      currentIndex : 6,
      imgSrc : 'https://picsum.photos/264/264?image=975',
    },
    {
      currentIndex : 7,
      imgSrc : 'https://picsum.photos/264/264?image=970',
    },
    {
      currentIndex : 8,
      imgSrc : 'https://picsum.photos/264/264?image=965',
    },
    {
      currentIndex : 9,
      imgSrc : 'https://picsum.photos/264/264?image=960',
    },
  ]
  numbers;
  constructor(

  ) {
    this.numbers = Array(Math.ceil( this.feedList.length / 4)).fill(4).map((x, i) => i + 1);
    console.log(this.numbers);
  }


  ngOnInit() {

  }

}
