import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import Chart from 'chart.js';
import {select, Store} from '@ngrx/store';
import {PState} from '../../../../store/p.reducer';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import {TryAddOrCreateToCart} from '../../../../../../../../core/store/cart/cart.actions';
import {DisplayAlertMessage} from '../../../../../../../../core/store/ui/ui.actions';
import {LOCATION_MAP} from '../../../../../../../../app.config';

@Component({
  selector: 'onpicks-p-menu',
  templateUrl: './p-menu.component.html',
  styleUrls: ['./p-menu.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})


// MUST TODO: p.component.ts에서 store async를 받아서 pmenu에는 단순히 처리만
// TODO : 스크롤 메뉴 관련 // https://www.29cm.co.kr/order/checkout?pay_code=10 참고해서, fix메뉴가 충분히 아래로 내려가면, 그때 내려갈 수 있도록 변경
export class PMenuComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  keyMapForSlug = {};
  optionObject = {};

  selectedFirstOptionIndex = null;

  @ViewChild('titleHeight') titleHeightElement;
  @ViewChild('pMenu') pMenu: ElementRef;
  @Input('data')
    set data( xData) {
      console.log(xData);
      if ( xData === undefined ) { return; };
      this._data = xData;
      const ObjectKeysCount =  xData.attributes.length;
      let mergeKey = '';
      let cnt = 0;
      const test = {}
      let depthKey = '';


      /* async를 통해 데이터가 들어올때만 다음으로 넘어감*/
      console.log(this.titleHeight)
      const result = parseInt(getComputedStyle(this.titleHeightElement.nativeElement).height, 10);
      this.titleHeight = result === 0  ? this.titleHeight : result;

      // @ts-ignore
      const that = this
      new ResizeSensor(this.titleHeightElement.nativeElement, function() {
        that.titleHeight = parseInt(getComputedStyle(that.titleHeightElement.nativeElement).height, 10);
      });

      setTimeout( () => {
        xData.variants.forEach( variantsItem => {
          xData.attributes.forEach( attributes_key => {
            if ( cnt === ObjectKeysCount - 1 ) {
              mergeKey += variantsItem.attribute_values[attributes_key];
              this.keyMapForSlug[mergeKey] = variantsItem.slug;
              mergeKey = '';


              test[depthKey][variantsItem.attribute_values[attributes_key]] = '';
              depthKey = '';
              cnt = 0;
            } else {
              mergeKey += variantsItem.attribute_values[attributes_key] + '_';

              depthKey = variantsItem.attribute_values[attributes_key];
              test[depthKey] = {
                ...test[depthKey]
              };
              cnt++;
            }
          });

        });

        const listTemp = [];
        let depthCnt = 0;
        let listFirstDepthTemp = [];
        let listTwoDepthParentTemp = {};
        let listTwoDepthListTemp = [];
        console.log(test);
        xData.attributes.forEach( attributes_key => {

          listFirstDepthTemp = [];

          Object.keys(test).forEach( (key, index) => {
            listTwoDepthListTemp = [];
            Object.keys(test[key]).forEach( twoKey => {
              console.log(key);
              console.log(twoKey);
              listTwoDepthListTemp.push({title: twoKey, value: twoKey});
            });
            listTwoDepthParentTemp = { title : xData.attributes[1], list: listTwoDepthListTemp.slice()};

            listFirstDepthTemp.push(
              {
                title : key,
                value : key,
                children : listTwoDepthParentTemp,
              }
            );
          });

          depthCnt++;
          this.optionObject = {title: xData.attributes[0], list: listFirstDepthTemp };
          console.log(this.optionObject);
          console.log()
        });


        this.cd.markForCheck();
        console.log(this._data.attributes);
      }, 0);

      console.log(this._data.attributes);
      this.discountPercent = 100 - Math.round((xData.price / xData.msrp * 100));
    }

  discountPercent;
  _data;

  chart;
  dateTitle;
  amazonPrice;
  onpicksPrice;
  savingPrice;
  dataOuter;
  hrLiner;
  initialDatesTitle;
  scrollEvent
  PStore$;

  titleHeight;


  chartSortList = [
    {
      title : '30일',
      value : 0,
    },
    {
      title : '90일',
      value : 1,
    }
  ]

  numberOptionList = {
    list : [
      {
        title : '1',
        value : 1,
      },
      {
        title : '2',
        value : 2,
      },
      {
        title : '3',
        value : 3,
      },
      {
        title : '4',
        value : 4,
      },
      {
        title : '5',
        value : 5,
      },
      {
        title : '6',
        value : 6,
      },
      {
        title : '7',
        value : 7,
      },
      {
        title : '8',
        value : 8,
      },
      {
        title : '9',
        value : 9,
      },
      {
        title : '10',
        value : 10,
      }
    ]
  }

  keyListForSlug = [];

  currentSelectOption = {
    amount : 1,
    slug : ''
  }

  cartStore$;
  cartStore;

  constructor(
    @Inject(LOCATION_MAP) public locationMap: any,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef
  ) {
    this.initialDatesTitle = ['Date1', 'Date2', 'Date3'];
    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
      });
  }
  ngOnDestroy() {
    this._data = null;
    console.log('destroy!!');
    if ( this.scrollEvent !== undefined ) {
      this.scrollEvent.unsubscribe();
    }

    if ( this.PStore$ !== undefined ) {
      this.PStore$.unsubscribe();
    }

    if ( this.cartStore$ !== undefined) {
      this.cartStore$.unsubscribe();
    }


  }
  optionSelect(xValue, xIndex) {
    this.keyListForSlug[xIndex] = xValue.value;

    if ( xIndex === 0 ){
      this.selectedFirstOptionIndex = xValue.index;
    }

  }

  amountSelect(xValue ) {
    this.currentSelectOption.amount = xValue.value;
  }

  addToCart(xPackIndex){
    console.log(xPackIndex);
    let keyForSlug = '';
    this.keyListForSlug.forEach( (value, index) => {
      if ( (this.keyListForSlug.length - 1) === index ){
        keyForSlug += value;
      } else {
        keyForSlug += value + '_';
      }
    })

    let currentProductSlug = undefined;
    if ( this._data.attributes.length === 0 ) {
      currentProductSlug = this._data.slug;
    } else {
      currentProductSlug = this.keyMapForSlug[keyForSlug];
    }


    if ( currentProductSlug === undefined ){
      this.store.dispatch(new DisplayAlertMessage('옵션을 정확히 선택해주세요.'));
    }

    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      productSlug: currentProductSlug,
      amount: this.currentSelectOption.amount,
      packIndex: xPackIndex,
      increaseOrCreate: currentProductSlug in this.cartStore.cartList
    }));
  }

  ngOnChanges( changes: SimpleChanges ) {

  }



  ngAfterViewInit() {


    const weatherDates = []

    this.scrollEvent = fromEvent(window, 'scroll');
    this.PStore$ = this.store.pipe( select(state => state['p']['ui']));
    let setStatus = '';
    let menuTopValue: { menuPosition};
    this.PStore$ = this.PStore$.subscribe( (val: { menuPosition})  => {
      menuTopValue = val;

      // absolute
      if (window.pageYOffset >= (menuTopValue.menuPosition - this.titleHeight) - 32 ) {
        this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'absolute');
        this.renderer.setStyle(this.pMenu.nativeElement, 'top', (menuTopValue.menuPosition - this.titleHeight) * 0.1 + 'rem');
      }

      this.cd.markForCheck();
    });
    this.scrollEvent = this.scrollEvent.subscribe(val => {
      // console.log(this.titleHeight);
      if (window.pageYOffset >= 172) {
        if (window.pageYOffset >= (menuTopValue.menuPosition - this.titleHeight) - 32) {
          // console.log('activated menuPosition : ' + window.pageYOffset);
          if ( setStatus === 'absolute') { return; }
          setStatus = 'absolute';
          this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'absolute');
          this.renderer.setStyle(this.pMenu.nativeElement, 'top', (menuTopValue.menuPosition - this.titleHeight) * 0.1 + 'rem');
        } else {
          if ( setStatus === 'fixed' ) { return; }
          setStatus = 'fixed';
          this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'fixed');
          this.renderer.setStyle(this.pMenu.nativeElement, 'top', '32px');
        }
      } else {
        if (setStatus === '') return;
        setStatus = '';
        this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'static');
        this.renderer.setStyle(this.pMenu.nativeElement, 'top', '0');
      }

      this.cd.markForCheck();
    });
    // @ts-ignore
    const that = this;

    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
      draw: function(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          const activePoint = this.chart.tooltip._active[0];
          const ctx = this.chart.ctx;
          const x = this.chart.tooltip._active[0].tooltipPosition().x;
          const topY = this.chart.tooltip._active[1].tooltipPosition().y;
          const bottomY = this.chart.tooltip._active[0].tooltipPosition().y;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY - 5);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#b3b3b3';
          ctx.stroke();
          ctx.restore();
        }
      }
    });
    this.chart = new Chart('canvas', {
      type: 'LineWithLine',
      data: {
        labels: this.initialDatesTitle,
        datasets: [{

          // onpicks price
          data: [10, 0, 10],
          backgroundColor: [
            'rgba(0, 132, 137, 0.2)',
          ],
          pointHoverBackgroundColor: 'rgba(0, 132, 137, 1)',
          pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
          pointHoverRadius: 5,
          borderColor: [
            'rgba(0, 132, 137, 1)',
          ],
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointHitRadius: 100,
        }, {
          // amazon price
          data: [18, 20, 18],
          backgroundColor: [
            'rgba(0,0,0,0)',
          ],
          pointHoverBackgroundColor: '#b3b3b3',
          pointHoverBorderColor: '#FFFFFF',
          pointHoverRadius: 5,
          borderColor: [
            '#b3b3b3',
          ],
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointHitRadius: 100,
        }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        tooltips: {
          mode: 'index',
          backgroundColor: '#FFFFFF',
          bodyFontSize: 16,
          bodyFontColor: '#008489',
          enabled: false,

          custom: function(tooltip) {
            // get the tooltip element
            let tooltipEl = document.getElementById('chartjs-tooltip');

            if(tooltip.dataPoints === undefined) return;


            const x = tooltip.dataPoints[0].x;
            const y = tooltip.dataPoints[0].y;
            const xAlign = tooltip.xAlign;
            const _amazonPrice = tooltip.dataPoints[1].yLabel;
            const _onpicksPrice = tooltip.dataPoints[0].yLabel;
            // innerHTML += '<br>'
            // innerHTML += '<br>'
            // innerHTML += 'Amazon: $25'
            // innerHTML += '<br>'
            // innerHTML += 'Onpicks: $19'
            // innerHTML += '<br>'
            // innerHTML += '<hr>'
            // innerHTML += 'Savings: $6'

            if (!tooltipEl) {
              tooltipEl = that.renderer.createElement('div');

              that.renderer.setStyle(tooltipEl, 'position', 'absolute');
              that.renderer.setStyle(tooltipEl, 'top', '0');
              that.renderer.setStyle(tooltipEl, 'width', '141px');
              that.renderer.setStyle(tooltipEl, 'height', '145px');
              that.renderer.setProperty(tooltipEl, 'id', 'chartjs-tooltip');
              that.renderer.setStyle(tooltipEl, 'backgroundColor', '#FFFFFF');
              that.renderer.setStyle(tooltipEl, 'borderRadius', '2px');
              that.renderer.setStyle(tooltipEl, 'pointerEvents', 'none');
              that.renderer.setStyle(tooltipEl, 'boxShadow', '0 6px 12px 0 #e3e3e3');
              that.renderer.setStyle(tooltipEl, 'transition', 'transform .5s, opacity .5s');
              /* 가끔씩 에러가 있을때가 있는데 어떻게 해야할지 잘 모르겠음.
              * `this._chart.canvas.$chartjs.resizer.parentNode` 가 undefined라고 뜸.*/
              that.renderer.setStyle(this._chart.canvas.$chartjs.resizer.parentNode, 'position', 'relative');
              that.renderer.appendChild(this._chart.canvas.$chartjs.resizer.parentNode, tooltipEl);
              that.renderer.listen(this._chart.canvas.$chartjs.resizer.parentNode, 'mouseout' , () => {
                that.renderer.setStyle(tooltipEl, 'opacity', '0');
              });


              this.dataOuter = that.renderer.createElement('div');
              this.dateTitle = that.renderer.createElement('span');
              this.amazonPrice = that.renderer.createElement('span');
              this.onpicksPrice = that.renderer.createElement('span');
              this.savingPrice = that.renderer.createElement('span');
              this.savingPrice = that.renderer.createElement('span');
              this.hrLiner = that.renderer.createElement('hr');

              that.renderer.setStyle(this.dataOuter, 'padding', '1.6rem');

              that.renderer.setStyle(this.dateTitle, 'color', '#b3b3b3');
              that.renderer.setStyle(this.dateTitle, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.dateTitle, 'fontWeight', '500');
              that.renderer.setStyle(this.dateTitle, 'lineHeight', '1.5');
              that.renderer.setStyle(this.dateTitle, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.dateTitle, 'display', 'block');

              that.renderer.setStyle(this.amazonPrice, 'color', '#b3b3b3');
              that.renderer.setStyle(this.amazonPrice, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.amazonPrice, 'fontWeight', '500');
              that.renderer.setStyle(this.amazonPrice, 'lineHeight', '1.5');
              that.renderer.setStyle(this.amazonPrice, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.amazonPrice, 'display', 'block');

              that.renderer.setStyle(this.onpicksPrice, 'color', '#008489');
              that.renderer.setStyle(this.onpicksPrice, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.onpicksPrice, 'fontWeight', '500');
              that.renderer.setStyle(this.onpicksPrice, 'lineHeight', '1.5');
              that.renderer.setStyle(this.onpicksPrice, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.onpicksPrice, 'display', 'block');

              that.renderer.setStyle(this.savingPrice, 'color', '#008489');
              that.renderer.setStyle(this.savingPrice, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.savingPrice, 'fontWeight', '500');
              that.renderer.setStyle(this.savingPrice, 'lineHeight', '1.5');
              that.renderer.setStyle(this.savingPrice, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.savingPrice, 'display', 'block');

              that.renderer.setStyle(this.hrLiner, 'margin', '0.8rem 0 ');
              that.renderer.setStyle(this.hrLiner, 'marginRight', '0.8rem');

              that.renderer.appendChild(this.dataOuter, this.dateTitle);
              that.renderer.appendChild(this.dataOuter, this.amazonPrice);
              that.renderer.appendChild(this.dataOuter, this.onpicksPrice);
              that.renderer.appendChild(this.dataOuter, this.hrLiner);
              that.renderer.appendChild(this.dataOuter, this.savingPrice);


              that.renderer.appendChild(tooltipEl, this.dataOuter);
            }
            // that.renderer.setProperty(this.dateTitle, 'innerText', tooltip.title);
            that.renderer.setProperty(this.amazonPrice, 'innerText', 'Amazon: $' + _amazonPrice);

            that.renderer.setProperty(this.onpicksPrice, 'innerText', 'Onpicks: $' + _onpicksPrice);
            that.renderer.setProperty(this.savingPrice, 'innerText', 'Savings: $' + (_amazonPrice - _onpicksPrice));

            that.renderer.setStyle(tooltipEl, 'transform', xAlign !== 'right' ? 'translate(' + (x + 10) + 'px, 15px)' : 'translate(' + (x - (141 + 18) ) + 'px, 15px)'  );

            that.renderer.setStyle(tooltipEl, 'opacity', '1');
            // that.renderer.setProperty(tooltipEl, 'innerHTML', innerHTML);


            // that.renderer.setStyle(tooltipEl, 'transform', 'translateX(' + x + 'px)');
            // that.renderer.setStyle(tooltipEl, 'transition', 'transform .5s ease .5s');


          }
        },
        legend: {
          display: false,
        },
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        },
        scales: {

          yAxes: [{
            // scaleLabel: {
            //   display: true,
            //   labelString: 'hello',
            // },
            gridLines: {
              drawBorder: false,
              tickMarkLength: 0,
            },
            ticks: {
              display: false,
              max: 20,
              min: 0,
              stepSize: 10,
              beginAtZero: true,
            }
          }],
          xAxes: [{
            // scaleLabel: {
            //   display: true,
            //   labelString: 'hello',
            // },
            gridLines: {
              drawBorder: false,
              tickMarkLength: 0,
            },

            ticks: {
              display: false,
            }
          }]
        }
      }
    });
  }

  ngOnInit() {

  }

  toFixed( data: number) {
    return data.toFixed(2);
  }

  typeof( hello ) {
    return typeof(hello);
  }
}
