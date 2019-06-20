import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, SideMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
