import {Component, OnInit, ChangeDetectionStrategy, Inject, LOCALE_ID, Renderer2} from '@angular/core';
import { Chart } from 'chart.js';
import  * as moment from 'moment';
import {CURRENCY} from '../../../../../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'onpicks-p-menu-chart',
  templateUrl: './p-menu-chart.component.html',
  styleUrls: ['./p-menu-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PMenuChartComponent implements OnInit {
  chartData;
  chart;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    private renderer: Renderer2,

  ) { }
  ngOnInit() {
    this.chartData = [
      {
        timestamp: new Date('2019-06-08 12:00:00'),
        our_price: 10000,
        ref_price: 9800,
        ref_seller: '쿠팡'
      },
      {
        timestamp: new Date('2019-06-09 12:00:00'),
        our_price: 11000,
        ref_price: 10000,
        ref_seller: '쿠팡'
      },
      {
        timestamp: new Date('2019-06-10 12:00:00'),
        our_price: 10800,
        ref_price: 10000,
        ref_seller: '쿠팡'
      },
      {
        timestamp: new Date('2019-06-11 12:00:00'),
        our_price: 10800,
        ref_price: 11000,
        ref_seller: '지마켓'
      },
      {
        timestamp: new Date('2019-06-12 12:00:00'),
        our_price: 10700,
        ref_price: 11000,
        ref_seller: '지마켓'
      },
      {
        timestamp: new Date('2019-06-13 12:00:00'),
        our_price: 10200,
        ref_price: 10800,
        ref_seller: '지마켓'
      },
      {
        timestamp: new Date('2019-06-14 12:00:00'),
        our_price: 10000,
        ref_price: 10800,
        ref_seller: '지마켓'
      },
      {
        timestamp: new Date('2019-06-15 12:00:00'),
        our_price: 9900,
        ref_price: 10500,
        ref_seller: '원프라이스'
      },
      {
        timestamp: new Date('2019-06-16 12:00:00'),
        our_price: 9900,
        ref_price: 10500,
        ref_seller: '원프라이스'
      },
      {
        timestamp: new Date('2019-06-17 12:00:00'),
        our_price: 10000,
        ref_price: 10500,
        ref_seller: '원프라이스'
      },
      {
        timestamp: new Date('2019-06-18 12:00:00'),
        our_price: 10000,
        ref_price: 10300,
        ref_seller: '지마켓'
      },
      {
        timestamp: new Date('2019-06-19 12:00:00'),
        our_price: 10000,
        ref_price: 10000,
        ref_seller: '지마켓'
      }
    ];
    const labels = this.chartData.map(({timestamp}) => {
      return moment(timestamp).format('MMM Do YY');
    });
    const [dataOnpicks, dataCompetitor] = [
      this.chartData.map(({our_price}) => our_price),
      this.chartData.map(({ref_price}) => ref_price)
    ];
    const priceRange = {
      min: Math.min(...dataOnpicks, ...dataCompetitor),
      max: Math.max(...dataOnpicks, ...dataCompetitor)
    };
    const offset = (priceRange.max - priceRange.min) * 0.1;     // 위 아래로 10%의 마진을 둔다.
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
    console.log('--------- labels ---------');
    console.log(labels);
    this.chart = new Chart('canvas', {
      type: 'LineWithLine',
      data: {
        labels: labels,
        datasets: [{

          // onpicks price
          data: dataOnpicks,
          backgroundColor: [
            'rgba(0, 132, 137, 0.2)',
          ],
          pointHoverBackgroundColor: '#ff3d57',
          pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
          pointHoverRadius: 4,
          borderColor: [
            'rgba(0, 132, 137, 1)',
          ],
          pointHoverBorderWidth: 3,
          pointRadius: 0,
          pointBackgroundColor: 'rgba(0,0,0,0)',
        }, {
          data: dataCompetitor,
          backgroundColor: [
            'rgba(0,0,0,0)',
          ],
          pointHoverBackgroundColor: '#b3b3b3',
          pointHoverBorderColor: '#FFFFFF',
          pointHoverRadius: 0,
          borderColor: [
            '#b3b3b3',
          ],
          borderWidth: 2,
          pointRadius: 0,
          pointBackgroundColor: 'rgba(0,0,0,0)',
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
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 30,
          }
        },
        scales: {
          xAxes: [
            {
              maxRotation: 0,
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
              ticks: {
                maxTicksLimit: 10,
                maxRotation: 0
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false,
                suggestedMin: priceRange.min - offset,
                suggestedMax: priceRange.max + offset,
              }
            }
          ]
        },
        tooltips: {
          mode: 'index',
          backgroundColor: '#FFFFFF',
          bodyFontSize: 16,
          bodyFontColor: '#008489',
          enabled: false,
          position: 'average',
          custom: function(tooltip) {
            // get the tooltip element
            let tooltipEl = document.getElementById('chartjs-tooltip');

            if (tooltip.dataPoints === undefined) {return;}

            const TOOLTIP_HEIGHT = 100;
            const TOOLTIP_WIDTH = 200;

            const x = tooltip.dataPoints[0].x;
            const y = tooltip.dataPoints[0].y;
            const xAlign = tooltip.xAlign;
            const _competitorPrice = tooltip.dataPoints[1].yLabel;
            const _onpicksPrice = tooltip.dataPoints[0].yLabel;
            const date = tooltip.dataPoints[0].xLabel;
            const saving = _competitorPrice - _onpicksPrice;
            if (!tooltipEl) {
              tooltipEl = that.renderer.createElement('div');

              that.renderer.setStyle(tooltipEl, 'position', 'absolute');
              that.renderer.setStyle(tooltipEl, 'top', '0');
              that.renderer.setStyle(tooltipEl, 'width', TOOLTIP_WIDTH + 'px');
              that.renderer.setStyle(tooltipEl, 'height', TOOLTIP_HEIGHT + 'px');
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
              this.competitorPrice = that.renderer.createElement('span');
              this.onpicksPrice = that.renderer.createElement('span');
              this.savingPrice = that.renderer.createElement('span');
              this.hrLiner = that.renderer.createElement('hr');
              const triangle = that.renderer.createElement('span');
              that.renderer.setStyle(triangle, 'content', '');
              that.renderer.setStyle(triangle, 'position', 'absolute');
              that.renderer.setStyle(triangle, 'bottom', '0');
              that.renderer.setStyle(triangle, 'left', '50%');
              that.renderer.setStyle(triangle, 'width', '0');
              that.renderer.setStyle(triangle, 'height', '0');
              that.renderer.setStyle(triangle, 'border', '20px solid transparent');
              that.renderer.setStyle(triangle, 'border-top-color', '#FFFFFF');
              that.renderer.setStyle(triangle, 'border-bottom', '0');
              that.renderer.setStyle(triangle, 'margin-left', '-20px');
              that.renderer.setStyle(triangle, 'margin-bottom', '-20px');
              // that.renderer.setStyle(triangle, 'boxShadow', '0 6px 12px 0 #e3e3e3');

              that.renderer.setStyle(this.dataOuter, 'padding', '1.6rem');

              that.renderer.setStyle(this.dateTitle, 'color', '#b3b3b3');
              that.renderer.setStyle(this.dateTitle, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.dateTitle, 'fontWeight', '500');
              that.renderer.setStyle(this.dateTitle, 'lineHeight', '1.5');
              that.renderer.setStyle(this.dateTitle, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.dateTitle, 'display', 'block');

              that.renderer.setStyle(this.competitorPrice, 'color', '#b3b3b3');
              that.renderer.setStyle(this.competitorPrice, 'fontSize', '1.6rem');
              that.renderer.setStyle(this.competitorPrice, 'fontWeight', '500');
              that.renderer.setStyle(this.competitorPrice, 'lineHeight', '1.5');
              that.renderer.setStyle(this.competitorPrice, 'letterSpacing', '0.04rem');
              that.renderer.setStyle(this.competitorPrice, 'display', 'block');

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
              that.renderer.appendChild(this.dataOuter, this.competitorPrice);
              that.renderer.appendChild(this.dataOuter, this.onpicksPrice);
              that.renderer.appendChild(this.dataOuter, this.hrLiner);
              that.renderer.appendChild(this.dataOuter, this.savingPrice);
              that.renderer.appendChild(tooltipEl, triangle);

              that.renderer.appendChild(tooltipEl, this.dataOuter);
            }
            // that.renderer.setProperty(this.dateTitle, 'innerText', tooltip.title);
            that.renderer.setProperty(this.competitorPrice, 'innerText', date);

            that.renderer.setProperty(this.savingPrice, 'innerText', 'Savings: $' + saving);
            that.renderer.setStyle(tooltipEl, 'transform', xAlign !== 'right' ? 'translate(' + ( x - TOOLTIP_WIDTH / 2 ) + 'px, ' + ( y - TOOLTIP_HEIGHT - 50 ) + 'px)' : 'translate(' + (x - ( TOOLTIP_WIDTH / 2 ) ) + 'px, ' + ( y - TOOLTIP_HEIGHT -50 ) + 'px)');

            that.renderer.setStyle(tooltipEl, 'opacity', '1');
            // that.renderer.setProperty(tooltipEl, 'innerHTML', innerHTML);


            // that.renderer.setStyle(tooltipEl, 'transform', 'translateX(' + x + 'px)');
            // that.renderer.setStyle(tooltipEl, 'transition', 'transform .5s ease .5s');


          }
        },
      }
    });
  }

}
