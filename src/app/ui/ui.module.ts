import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './common/star-rating/star-rating.component';
import { MiniListComponent } from './common/mini-list/mini-list.component';
import { SimpleCarouselComponent } from './common/simple-carousel/simple-carousel.component';
import { CircleNButtonComponent } from './onpicks/button/circle-n-button/circle-n-button.component';
import { CirclePButtonComponent } from './onpicks/button/circle-p-button/circle-p-button.component';
import { SearchBoxComponent } from './onpicks/ui/search-box/search-box.component';
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';
import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './onpicks/ui/select-box/select-box.component';
import { SortBoxComponent } from './onpicks/ui/sort-box/sort-box.component';
import { BannerCarouselComponent } from './common/banner-carousel/banner-carousel.component';
import { FontRobotoComponent } from './onpicks/ui/font-roboto/font-roboto.component';
import { FontSpoqaComponent } from './onpicks/ui/font-spoqa/font-spoqa.component';
import { CheckBoxComponent } from './onpicks/ui/check-box/check-box.component';
import {RouterModule} from '@angular/router';
import { NumericButtonComponent } from './onpicks/button/numeric-button/numeric-button.component';
import { ProgressiveBarComponent } from './common/progressive-bar/progressive-bar.component';
import {PopularBrandComponent} from './onpicks/list/popular-brand/popular-brand.component';
import {CategoryListComponent} from './onpicks/list/category-list/category-list.component';
import {TodayCollectionComponent} from './onpicks/list/today-collection/today-collection.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipeModule,
    RouterModule,
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
    FontSpoqaComponent,
    CheckBoxComponent,
    NumericButtonComponent,
    ProgressiveBarComponent,
    PopularBrandComponent,
    CategoryListComponent,
    TodayCollectionComponent,
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
    FontSpoqaComponent,
    CheckBoxComponent,

    PopularBrandComponent,
    CategoryListComponent,
    TodayCollectionComponent,

    NumericButtonComponent,
    ProgressiveBarComponent,
  ]
})

export class UiModule { }
