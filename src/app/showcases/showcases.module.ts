import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcasesRoutingModule } from './showcases-routing.module';
import {UiModule} from '../ui/ui.module';
import {DirectivesModule} from '../core/directives/directives.module';
import {PipeModule} from '../core/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    ShowcasesRoutingModule,
    UiModule,
    DirectivesModule,
    PipeModule
  ],
  declarations: []
})
export class ShowcasesModule { }
