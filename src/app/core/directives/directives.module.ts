import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadDirective} from './lazy-load/lazy-load.directive';
import {CleanLoadDirective} from './clean-load/clean-load.directive';
import { AnimateOnScrollDirective } from './animate-on-scroll/animate-on-scroll.directive';
import { LetDirective } from './ng-let/ng-let.directive';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LazyLoadDirective,
    CleanLoadDirective,
    AnimateOnScrollDirective,
    LetDirective
  ],
  exports: [
    LazyLoadDirective,
    CleanLoadDirective,
    AnimateOnScrollDirective,
    LetDirective
  ]
})

export class DirectivesModule {}



