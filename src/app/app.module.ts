import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeadlineComponent } from './headmenu/headline/headline.component';
import { CarouselComponent } from './headmenu/carousel/carousel.component';


import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule } from "@angular/material";

import 'hammerjs';


const routerSettings: Routes = [
  { path: '', component: HeadlineComponent },
  { path: 'home', component: HeadlineComponent   },
  { path: 'ticket', component: HeadlineComponent  },
  { path: 'poolbar', component: HeadlineComponent  },
  { path: 'service', component: HeadlineComponent  },
  { path: 'contakt', component: HeadlineComponent  },
  { path: 'season', component: HeadlineComponent  },
  { path: 'login', component: HeadlineComponent  },
  { path: '**', component: HeadlineComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule,
    RouterModule.forRoot(routerSettings)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
