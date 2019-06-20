import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { DateAdapter } from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import { Platform, PlatformModule } from '@angular/cdk/platform';

import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  imports: [
    CommonModule,
    PlatformModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    PlatformModule,
    CdkTreeModule,
    MatTreeModule
  ],
  declarations: [],
})
export class MaterialModule { }
