import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'onpicks-circle-n-button',
  templateUrl: './circle-n-button.component.html',
  styleUrls: ['./circle-n-button.component.scss']
})
export class CircleNButtonComponent implements OnInit, AfterViewInit{
  @ViewChild('nextButton') nextButton;
  @Input('right') right;
  @Input('top') top;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.nextButton.nativeElement, 'right', this.right);
    this.renderer.setStyle(this.nextButton.nativeElement, 'top', this.top);
  }

}
