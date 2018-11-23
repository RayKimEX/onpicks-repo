import {AfterViewInit, Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {sampleTime} from 'rxjs/operators';

@Component({
  selector: 'onpicks-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.scss']
})
export class ShowcasesComponent implements OnInit, AfterViewInit {

  showcasesDataList = [
    {
      category : 'Beauty',
      title : 'Have You Discovered Lancome?',
      imgSrc : 'https://picsum.photos/360/360?image=100'
    },
    {
      category : 'Beauty',
      title : 'You Won’t Believe That These Brands are Vegan',
      imgSrc : 'https://picsum.photos/360/360?image=200'
    },
    {
      category : 'Electronics',
      title : 'The New Galaxy',
      imgSrc : 'https://picsum.photos/360/360?image=300'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
    {
      category : 'Beauty',
      title : 'Match Your Scent to Your Mood',
      imgSrc : 'https://picsum.photos/360/360?image=400'
    },
    {
      category : 'Fashion',
      title : 'Rolex - Timeless Luxury Watches',
      imgSrc : 'https://picsum.photos/360/360?image=500'
    },
    {
      category : 'Pantry & Household',
      title : 'Whole Food Protein Bars with Real Ingredients',
      imgSrc : 'https://picsum.photos/360/360?image=600'
    },
  ]
  scroll$;
  willLoadData = false;
  constructor() {

    // this.scroll$ = fromEvent(window, 'scroll').pipe(sampleTime(50))
    //   .subscribe( val => {
    //     if (((( window.scrollY + window.innerHeight ) / document.body.scrollHeight) * 100) >= 90 && !this.willLoadData) {
    //       console.log(this.willLoadData);
    //       this.willLoadData = true;
    //       console.log('hello');
    //       this.willLoadDataFunction();
    //     }
    //   });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('Showcases Init!');
  }

}
