import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { HeadlineComponent } from './headmenu/headline/headline.component';
import { CarouselComponent } from './headmenu/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
