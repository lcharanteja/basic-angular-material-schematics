import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitDirective } from './split.directive';
import { SplitAreaDirective } from './split-area.directive';
import { SplitHandleDirective } from './split-handle.directive';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [SplitDirective, SplitAreaDirective, SplitHandleDirective],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [SplitDirective, SplitAreaDirective, SplitHandleDirective]
})
export class SplitModule { }
