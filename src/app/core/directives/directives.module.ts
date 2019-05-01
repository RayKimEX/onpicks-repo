import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadDirective} from './lazy-load/lazy-load.directive';
import {CleanLoadDirective} from './clean-load/clean-load.directive';
import {BackLoadDirective} from './back-load/back-load.directive';
import { AnimateOnScrollDirective } from './animate-on-scroll/animate-on-scroll.directive';
import { LetDirective } from './ng-let/ng-let.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
    AnimateOnScrollDirective,
    LetDirective,
  ],
  exports: [
    LazyLoadDirective,
    CleanLoadDirective,
    BackLoadDirective,
    AnimateOnScrollDirective,
    LetDirective,
  ]
})

export class DirectivesModule {
  
}


