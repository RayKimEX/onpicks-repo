import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input, OnChanges,
  OnInit,
  Renderer2, SimpleChanges,
  ViewChildren
} from '@angular/core';
import {UtilService} from '../../../../core/service/util/util.service';
import {interval} from 'rxjs';

@Component({
  selector: 'ui-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('star-point') starPoint;
  @Input('async-star-point') starPoint$;
  @Input('size') sizePoint;
  @ViewChildren('shapeStars') shapeStars;

  checkedIndex = 0;
  currentIndex = 0;
  starFloat;
  starInt;
  halfStarCondition = false;
  isChecked = false;

  constructor(private renderer: Renderer2,
              private eRef: ElementRef,
              private util: UtilService,
              private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.starFloat = this.util.getFloat(this.starPoint);
    // float가 0.5면 0.01을 빼서, 반올림 되지 않게한다.
    // 소수자리 2째 자리만 허용인 조건에서
    // 반옳림 조건은 0.51이상 0.99이하 일때
    // 반내림 조건은 0.00이상 0.50이하 일때
    this.starInt = Math.round(this.starFloat === 0.5 ? this.starPoint - 0.01 : this.starPoint);

    // hlafStar의 조건은 0보다 크고 0.5이하일때 해당
    this.halfStarCondition = (this.starFloat <= 0.5 && this.starFloat !== 0 ) ? true : false;

    // for ( let i = 0; i < this.starInt; i ++) {
    //   this.renderer.setStyle(this.shapeStars.toArray()[i].nativeElement, 'fill', '#292929');
    // }
    //
    // if ( this.halfStarCondition ) {
    //   this.renderer.setStyle(this.shapeStars.toArray()[this.starInt].nativeElement, 'fill', 'url(#grad)');
    // }
  }

  ngAfterViewInit() {


    /////////// For 28 px;
    // this.currentOverIndex = this.shapeStars.nativeElement.getAttribute('data-index');
    // console.log(this.currentOverIndex);
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  mouseOver(value, type) {
    // console.log(getList);
   //  console.log('[MouseOver] currentIndex : ' + this.currentIndex);
    if ( this.isChecked ) {
      if ( this.checkedIndex <= value ) {
        this.currentIndex = value;
      } else {
        this.currentIndex = this.checkedIndex;
      }
    } else {
      this.currentIndex = value;
    }
  }
  @HostListener('mouseleave', ['$event'])
  mouseHandling(event) {
    console.log('mouselaeve');
    if (this.isChecked) {
      this.currentIndex = this.checkedIndex;
    }else {
      this.currentIndex = 0;
    }

  }


  updatedChecked($event) {
    this.isChecked = true;
    this.checkedIndex = parseFloat($event.target.value );
    this.currentIndex = this.checkedIndex;
    // console.log('[updatedChecked] currentIndex : ' + this.currentIndex);
  }


}