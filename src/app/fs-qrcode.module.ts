import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsClipboardComponent } from './components/qrcode/qrcode.component';


@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [
    FsClipboardComponent,
  ],
  exports: [
    FsClipboardComponent,
  ],
})
export class FsQrcodeModule {
  static forRoot(): ModuleWithProviders<FsQrcodeModule> {
    return {
      ngModule: FsQrcodeModule,
    };
  }
}
