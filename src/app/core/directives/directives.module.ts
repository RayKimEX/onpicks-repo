import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadDirective} from './lazy-load/lazy-load.directive';
import {CleanLoadDirective} from './clean-load/clean-load.directive';
import {BackLoadDirective} from './back-load/back-load.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
  ],
  exports: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
  ]
})

export class DirectivesModule {
  
}


