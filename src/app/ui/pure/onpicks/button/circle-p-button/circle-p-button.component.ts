import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'onpicks-circle-p-button',
  templateUrl: './circle-p-button.component.html',
  styleUrls: ['./circle-p-button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CirclePButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('prevButton') prevButton;
  @Input('left') left;
  @Input('top') top;

  constructor(private renderer: Renderer2) {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.prevButton.nativeElement, 'left', this.left);
    this.renderer.setStyle(this.prevButton.nativeElement, 'top', this.top);
  }

}
