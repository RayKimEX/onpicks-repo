import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-p-description',
  templateUrl: './p-description.component.html',
  styleUrls: ['./p-description.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PDescriptionComponent implements OnInit {
  @Input('description') description;

  constructor() { }

  ngOnInit() {
  }

}
