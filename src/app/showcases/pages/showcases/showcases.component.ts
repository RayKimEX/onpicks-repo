import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.scss']
})
export class ShowcasesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('SHowcasesInit!');
  }

}
