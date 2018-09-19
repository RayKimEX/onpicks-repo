import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MiniListComponent } from './mini-list/mini-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import {SimpleCarouselComponent} from './simple-carousel/simple-carousel.component';
import {CoreModule} from '../core/core.module';

@NgModule({

  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [SimpleCarouselComponent, StarRatingComponent, MiniListComponent, HeaderComponent, FooterComponent, SelectBoxComponent],
  exports: [SimpleCarouselComponent, StarRatingComponent, MiniListComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
