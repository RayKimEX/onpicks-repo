import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadDirective } from './lazy-load/lazy-load.directive';
import { CleanLoadDirective } from './clean-load/clean-load.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyLoadDirective, CleanLoadDirective],
  exports: [
    LazyLoadDirective, CleanLoadDirective
  ]
})
export class CoreModule { }
