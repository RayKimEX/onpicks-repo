import {ChangeDetectionStrategy, Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'onpicks-circle-n-button',
  templateUrl: './circle-n-button.component.html',
  styleUrls: ['./circle-n-button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CircleNButtonComponent implements OnInit{
  @Input('right') right;
  @Input('top') top;
  // @Input('')

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

}
