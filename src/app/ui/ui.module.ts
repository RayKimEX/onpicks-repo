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
import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './onpicks/select-box/select-box.component';
import { SortBoxComponent } from './onpicks/sort-box/sort-box.component';
import { BannerCarouselComponent } from './common/banner-carousel/banner-carousel.component';
import { FontRobotoComponent } from './onpicks/font-roboto/font-roboto.component';
import { FontSpoqaComponent } from './onpicks/font-spoqa/font-spoqa.component';
import { CheckBoxComponent } from './onpicks/check-box/check-box.component';
import {RouterModule} from '@angular/router';
import { NumericButtonComponent } from './onpicks/numeric-button/numeric-button.component';
import { ProgressiveBarComponent } from './common/progressive-bar/progressive-bar.component';

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

    // plus minus를 나눈 이유는, 나누지 않으려면 typescript 코드가 들어가야되는데,
    // 성능이점상 typescript코드는 최대한 적게 들어가고, css로 적용하는게 나을것 같아서, 이렇게 적용함
    NumericButtonComponent,
    ProgressiveBarComponent,
  ]
})

export class UiModule { }
