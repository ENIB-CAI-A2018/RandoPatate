import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GrListComponent } from './gr-list/gr-list.component';
import { GrDetailComponent } from './gr-detail/gr-detail.component';
import { HomeComponent } from './home/home.component';
import { BouffeComponent } from './bouffe/bouffe.component';

import { FilterArrayPipe } from './pipes/filter-array-pipe';
import { OrderByPipe } from './pipes/orderby-pipe';

import { GrService } from './services/grs.service';


@NgModule({
  declarations: [
    AppComponent,
    GrListComponent,
    GrDetailComponent,
    HomeComponent,
    BouffeComponent,
    FilterArrayPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [GrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
