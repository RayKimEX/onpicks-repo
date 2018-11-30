import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadDirective} from './lazy-load/lazy-load.directive';
import {CleanLoadDirective} from './clean-load/clean-load.directive';
import {BackLoadDirective} from './back-load/back-load.directive';
import { AnimateOnScrollDirective } from './animate-on-scroll/animate-on-scroll.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
    AnimateOnScrollDirective,
  ],
  exports: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
    AnimateOnScrollDirective,
  ]
})

export class DirectivesModule {
  
}


