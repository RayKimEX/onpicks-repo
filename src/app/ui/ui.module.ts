// AngularComponent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Core
import { DirectivesModule } from '../core/directives/directives.module';
import { PipeModule } from '../core/pipe/pipe.module';

// UI Component
import { StarRatingComponent } from './pure/common/star-rating/star-rating.component';
import { CarouselListComponent } from './pure/common/carousel-list/carousel-list.component';
import { SimpleCarouselComponent } from './pure/common/simple-carousel/simple-carousel.component';
import { CircleNButtonComponent } from './pure/onpicks/button/circle-n-button/circle-n-button.component';
import { CirclePButtonComponent } from './pure/onpicks/button/circle-p-button/circle-p-button.component';
import { SearchBoxComponent } from './pure/onpicks/item/search-box/search-box.component';
import { SelectBoxComponent } from './pure/onpicks/item/select-box/select-box.component';
import { SortBoxComponent } from './pure/onpicks/item/sort-box/sort-box.component';
import { BannerCarouselComponent } from './pure/common/banner-carousel/banner-carousel.component';
import { FontRobotoComponent } from './pure/onpicks/item/font-roboto/font-roboto.component';
import { FontSpoqaComponent } from './pure/onpicks/item/font-spoqa/font-spoqa.component';
import { CheckBoxComponent } from './pure/onpicks/item/check-box/check-box.component';
import { NumericButtonComponent } from './pure/onpicks/button/numeric-button/numeric-button.component';
import { ProgressiveBarComponent } from './pure/common/progressive-bar/progressive-bar.component';
import { PopularBrandComponent } from './pure/onpicks/list/popular-brand/popular-brand.component';
import { CategoryListComponent } from './pure/onpicks/list/category-list/category-list.component';
import { TodayCollectionComponent } from './pure/onpicks/list/today-collection/today-collection.component';
import { ListActiveButtonComponent } from './pure/onpicks/button/list-active-button/list-active-button.component';
import { PlusMinusIconComponent } from './pure/common/plus-minus-icon/plus-minus-icon.component';
import { FreeDeliveryNotiboxComponent } from './pure/onpicks/item/free-delivery-notibox/free-delivery-notibox.component';
import { InputBoxComponent } from './pure/onpicks/item/input-box/input-box.component';
import { ButtonComponent } from './pure/onpicks/button/button/button.component';
import { AdhereTableComponent } from './emitter/adhere-table/adhere-table.component';
import { CommunicateBoxComponent } from '../shops/pages/index/p/pages/index/reviews/communicate-box.component';
import { SearchNavigatorComponent } from './emitter/search-navigator/search-navigator.component';
import { ChangePreferenceComponent } from './emitter/change-preference/change-preference.component';
import { LoadingIconComponent } from './pure/onpicks/item/loading-icon/loading-icon.component';
import { ModalComponent } from './pure/onpicks/modal/modal.component';
import { AngleBracketNavigatorComponent } from './pure/onpicks/item/angle-bracket-navigator/angle-bracket-navigator.component';
import { ValueListComponent } from './pure/onpicks/list/value-list/value-list.component';
import { DynamicCarouselComponent } from './pure/common/dynamic-carousel/dynamic-carousel.component';
import { SearchNavigatorMobileFilterComponent } from './emitter/search-navigator/components/search-navigator-mobile-filter/search-navigator-mobile-filter.component';
import { BannerComponent } from './pure/common/banner/banner.component';
import { TrendingReviewsComponent } from './pure/onpicks/list/trending-reviews/trending-reviews.component';
import { FlagIconComponent } from './pure/onpicks/icon/flag-icon/flag-icon.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReviewCarouselComponent } from '../shops/pages/index/p/components/index/reviews/review-carousel/review-carousel.component';
import { DeliveryAddressComponent } from './emitter/delivery-address/delivery-address.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipeModule,
    RouterModule,
    InfiniteScrollModule,
  ],
  declarations: [
    SimpleCarouselComponent,
    StarRatingComponent,
    CarouselListComponent,
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
    CommunicateBoxComponent,
    SearchNavigatorComponent,
    ChangePreferenceComponent,
    LoadingIconComponent,
    ModalComponent,
    AngleBracketNavigatorComponent,
    ValueListComponent,
    DynamicCarouselComponent,
    SearchNavigatorMobileFilterComponent,
    BannerComponent,
    TrendingReviewsComponent,
    FlagIconComponent,
    ReviewCarouselComponent,
    DeliveryAddressComponent
  ],
  exports: [
    AdhereTableComponent,
    AngleBracketNavigatorComponent,
    BannerComponent,
    BannerCarouselComponent,
    ButtonComponent,
    CategoryListComponent,
    ChangePreferenceComponent,
    CheckBoxComponent,
    CircleNButtonComponent,
    CirclePButtonComponent,
    CommunicateBoxComponent,

    DeliveryAddressComponent,
    DynamicCarouselComponent,
    FontRobotoComponent,
    FontSpoqaComponent,
    FlagIconComponent,
    FreeDeliveryNotiboxComponent,
    InputBoxComponent,
    ListActiveButtonComponent,
    LoadingIconComponent,
    CarouselListComponent,
    ModalComponent,
    NumericButtonComponent,

    PlusMinusIconComponent,
    PopularBrandComponent,
    ProgressiveBarComponent,
    SearchNavigatorComponent,
    SearchBoxComponent,
    SelectBoxComponent,
    SimpleCarouselComponent,
    SortBoxComponent,
    StarRatingComponent,

    TodayCollectionComponent,
    TrendingReviewsComponent,
    ValueListComponent
  ],
})

export class UiModule { }

