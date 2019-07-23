import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input, OnChanges,
  OnInit, Output,
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
  @Input('size') sizePoint;
  @ViewChildren('shapeStars') shapeStars;
  @Output('outputStarPoint') outputStartPoint = new EventEmitter();

  checkedIndex = 0;
  currentIndex = 0;
  starFloat;
  starInt;
  halfStarCondition = false;
  isChecked = false;

  window = window;

  constructor(
    private renderer: Renderer2,
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


    /* 28 star point를 위한 initializing */
    // this.checkedIndex = this.currentIndex = 3.5
    // this.isChecked = true;
  }

  ngAfterViewInit() {

  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  mouseOver(value, type) {

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
    if (this.isChecked) {
      this.currentIndex = this.checkedIndex;
    } else {
      this.currentIndex = 0;
    }

  }


  updatedChecked($event) {
    console.log($event.target.value);
    this.isChecked = true;
    this.checkedIndex = parseFloat($event.target.value );
    this.currentIndex = this.checkedIndex;
    this.outputStartPoint.emit($event.target.value);
  }


}
