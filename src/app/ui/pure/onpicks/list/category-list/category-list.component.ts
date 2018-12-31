import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'onpicks-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  @Input('popularCategory') popularCategory;

  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;

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
