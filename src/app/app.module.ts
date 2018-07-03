import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';


import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatMenuModule,
         MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule } from "@angular/material";

import { NgxCarouselModule } from 'ngx-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';

import 'hammerjs';
import { HomeComponent } from './pages/home/home.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CourseComponent } from './pages/course/course.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routerSettings: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent   },
  { path: 'ticket', component: TicketComponent  },
  { path: 'course', component: CourseComponent  },
  { path: 'service', component: ServiceComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: 'settings', component: HomeComponent  },
  { path: 'login', component: HomeComponent  },
  { path: '**', component: HomeComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketComponent,
    CarouselComponent,
    CourseComponent,
    ServiceComponent,
    ContactComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
    Ng2CarouselamosModule,
    FlexLayoutModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatListModule, MatSlideToggleModule, MatSidenavModule, MatMenuModule,
    RouterModule.forRoot(routerSettings)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
