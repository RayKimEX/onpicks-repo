import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-page-pet-supplies',
  templateUrl: './page-pet-supplies.component.html',
  styleUrls: ['./page-pet-supplies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagePetSuppliesComponent {

  constructor() { }
}
