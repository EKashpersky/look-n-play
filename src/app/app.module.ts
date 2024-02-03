import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LookNPlayModule } from 'look-n-play';

import { AppComponent } from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    LookNPlayModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class LNPExampleModule { }