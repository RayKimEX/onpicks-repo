import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import {UiModule} from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule,
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }
