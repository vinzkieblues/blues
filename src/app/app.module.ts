import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExhibitorDetailComponent } from './exhibitor-detail/exhibitor-detail.component';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';

import { ExhibitorService } from './exhibitor.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule }    from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ExhibitorSearchComponent } from './exhibitor-search/exhibitor-search.component';

import {ExhibitorFilterPipe} from './pipes'
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    BrowserAnimationsModule,
    NgPipesModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ExhibitorsComponent,
    ExhibitorDetailComponent,
    MessagesComponent,
    ExhibitorSearchComponent,
    ExhibitorFilterPipe      
  ],
  providers: [ ExhibitorService, MessageService ],
  bootstrap: [AppComponent]
})

export class AppModule { }