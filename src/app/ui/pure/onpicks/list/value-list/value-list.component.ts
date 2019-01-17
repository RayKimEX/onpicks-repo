import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Renderer2,
  ChangeDetectorRef,
  HostListener,
  AfterViewInit,
  ViewChild, ViewChildren
} from '@angular/core';
import {RESPONSIVE_MAP} from '../../../../../app.config';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'onpicks-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueListComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container;
  @ViewChildren('itemList') itemList;
  @ViewChild('shaveDiscription') shaveDiscription;

  imageIndex = 0;
  itemListArray;
  translateXWidth = 288;
  isShowButton = true;
  currentX = 0;
  currentPanVelocityX = 0;
  panInterval = null;

  valueList = [
    {
      imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
      title : 'Gluten Free',
      description : 'GMO는 유전자 변형 유기체를 의미한다. 유전자 변형 유기체(GMO)는 유전자 변형/엔지니어링 기법을 사용해 실험실에서 만들어진 새로운 유기물이다. 과학자들과 소비자와 환경 단체들은 유전자변형농산물을 함유한 식품에 대한 많은 건강 및 환경 위험들을 언급했다.'
    },
    {
      imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
      title : 'Gluten Free',
      description : 'GMO는 유전자 변형 유기체를 의미한다. 유전자 변형 유기체(GMO)는 유전자 변형/엔지니어링 기법을 사용해 실험실에서 만들어진 새로운 유기물이다. 과학자들과 소비자와 환경 단체들은 유전자변형농산물을 함유한 식품에 대한 많은 건강 및 환경 위험들을 언급했다.'
    },
    {
      imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
      title : 'Gluten Free',
      description : 'GMO는 유전자 변형 유기체를 의미한다. 유전자 변형 유기체(GMO)는 유전자 변형/엔지니어링 기법을 사용해 실험실에서 만들어진 새로운 유기물이다. 과학자들과 소비자와 환경 단체들은 유전자변형농산물을 함유한 식품에 대한 많은 건강 및 환경 위험들을 언급했다.'
    },
    {
      imgSrc : 'https:///img.onpicks.com/values/value-alcohol-free.png',
      title : 'Gluten Free',
      description : 'GMO는 유전자 변형 유기체를 의미한다. 유전자 변형 유기체(GMO)는 유전자 변형/엔지니어링 기법을 사용해 실험실에서 만들어진 새로운 유기물이다. 과학자들과 소비자와 환경 단체들은 유전자변형농산물을 함유한 식품에 대한 많은 건강 및 환경 위험들을 언급했다.'
    }
  ]

  constructor(
    @Inject(RESPONSIVE_MAP) public categoryMap,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {

  }

  // TODO : shave는 나중에 하자
  // https://github.com/NetanelBasal/angular2-shave
  //
  ngOnInit() {
    // tb
    this.breakpointObserver
      .observe([this.categoryMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isShowButton = false;
          this.cd.markForCheck();
        } else {
          this.isShowButton = true;
        }
      });
  }
  ngAfterViewInit() {
    this.itemListArray = this.itemList.toArray();
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }

  nextButton() {
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth  + 'px)');
  }

  prevButton() {
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + this.imageIndex * this.translateXWidth  + 'px)');
  }
}
