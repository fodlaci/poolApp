import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';


import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatMenuModule,
         MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule } from "@angular/material";

import { NgxCarouselModule } from 'ngx-carousel';

import 'hammerjs';
import { HomeComponent } from './pages/home/home.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { CarouselComponent } from './carousel/carousel.component';


const routerSettings: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent   },
  { path: 'ticket', component: TicketComponent  },
  { path: 'poolbar', component: HomeComponent  },
  { path: 'service', component: HomeComponent  },
  { path: 'contakt', component: HomeComponent  },
  { path: 'season', component: HomeComponent  },
  { path: 'login', component: HomeComponent  },
  { path: '**', component: HomeComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule, MatMenuModule,
    RouterModule.forRoot(routerSettings)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
