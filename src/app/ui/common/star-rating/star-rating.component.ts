import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {UtilService} from '../../../core/service/util/util.service';

@Component({
  selector: 'ui-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, AfterViewInit {
  @Input('star-point') starPoint;
  @Input('size') sizePoint;
  @ViewChildren('shapeStars') shapeStars;

  constructor(private renderer: Renderer2, private util: UtilService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const starFloat = this.util.getFloat(this.starPoint);

    // float가 0.5면 0.01을 빼서, 반올림 되지 않게한다.
    // 소수자리 2째 자리만 허용인 조건에서
    // 반옳림 조건은 0.51이상 0.99이하 일때
    // 반내림 조건은 0.00이상 0.50이하 일때
    const starInt = Math.round(starFloat === 0.5 ? this.starPoint - 0.01 : this.starPoint);

    // hlafStar의 조건은 0보다 크고 0.5이하일때 해당
    const halfStarCondition = (starFloat <= 0.5 && starFloat !== 0 ) ? true : false;

    for ( let i = 0; i < starInt; i ++) {
      this.renderer.setAttribute(this.shapeStars.toArray()[i].nativeElement, 'fill', '#292929');
    }

    if ( halfStarCondition ) {
      this.renderer.setAttribute(this.shapeStars.toArray()[starInt].nativeElement, 'fill', 'url(#grad)');
    }
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

}
