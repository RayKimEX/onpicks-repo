import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './common/star-rating/star-rating.component';
import { MiniListComponent } from './common/mini-list/mini-list.component';
import { SimpleCarouselComponent } from './common/simple-carousel/simple-carousel.component';
import { CircleNButtonComponent } from './onpicks/circle-n-button/circle-n-button.component';
import { CirclePButtonComponent } from './onpicks/circle-p-button/circle-p-button.component';
import { SearchBoxComponent } from './onpicks/search-box/search-box.component';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import {FormsModule} from '@angular/forms';
import {SelectBoxComponent} from './onpicks/select-box/select-box.component';
import { SortBoxComponent } from './onpicks/sort-box/sort-box.component';
import { BannerCarouselComponent } from './common/banner-carousel/banner-carousel.component';
import { FontRobotoComponent } from './onpicks/font-roboto/font-roboto.component';
import { FontSpoqaComponent } from './onpicks/font-spoqa/font-spoqa.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: [
    SimpleCarouselComponent,
    StarRatingComponent,
    MiniListComponent,
    CircleNButtonComponent,
    CirclePButtonComponent,
    SearchBoxComponent,
    SelectBoxComponent,
    SortBoxComponent,
    BannerCarouselComponent,
    FontRobotoComponent,
    FontSpoqaComponent
  ],
  exports: [
    SimpleCarouselComponent,
    StarRatingComponent,
    MiniListComponent,
    CircleNButtonComponent,
    CirclePButtonComponent,
    SearchBoxComponent,
    SelectBoxComponent,
    SortBoxComponent,
    BannerCarouselComponent,
    FontRobotoComponent,
    FontSpoqaComponent
  ]
})
export class UiModule { }