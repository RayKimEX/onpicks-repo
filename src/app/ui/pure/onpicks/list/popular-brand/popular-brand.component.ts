import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'onpicks-popular-brand',
  templateUrl: './popular-brand.component.html',
  styleUrls: ['./popular-brand.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class PopularBrandComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;

  popularBrand = [
    {
      imgSrc : 'http://img.onpicks.com/index-brand-jomalone.jpg',
      name : '조 말론'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-hyredo.jpg',
      name : '바이레도'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-diptyque.jpg',
      name : '딥 티크'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-bose.jpg',
      name : '보스'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-sony.jpg',
      name : '소니'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-samsung.jpg',
      name : '삼성'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-sony.jpg',
      name : '소니'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-samsung.jpg',
      name : '삼성'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-sony.jpg',
      name : '소니'
    },
    {
      imgSrc : 'http://img.onpicks.com/index-brand-samsung.jpg',
      name : '삼성'
    },
  ]

  imageIndex = 0;
  itemListArray;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();
  }

  nextButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 192 + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * 192 + 'px)');
  }

}
