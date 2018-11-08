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
import { ListActiveButtonComponent } from './onpicks/button/list-active-button/list-active-button.component';
import { PlusMinusIconComponent } from './common/plus-minus-icon/plus-minus-icon.component';
import { FreeDeliveryNotiboxComponent } from './onpicks/ui/free-delivery-notibox/free-delivery-notibox.component';
import { InputBoxComponent } from './onpicks/ui/input-box/input-box.component';
import { ButtonComponent } from './onpicks/button/button/button.component';
import { AdhereTableComponent } from './onpicks/table/adhere-table/adhere-table.component';
import { IndentTableComponent } from './onpicks/table/indent-table/indent-table.component';

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
    ListActiveButtonComponent,
    PlusMinusIconComponent,
    FreeDeliveryNotiboxComponent,
    InputBoxComponent,
    ButtonComponent,
    AdhereTableComponent,
    IndentTableComponent,
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
    ListActiveButtonComponent,
    PlusMinusIconComponent,

    NumericButtonComponent,
    ProgressiveBarComponent,
    FreeDeliveryNotiboxComponent,
    InputBoxComponent,
    ButtonComponent,
    AdhereTableComponent,

  ]
})

export class UiModule { }
