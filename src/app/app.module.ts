import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// gesture support for some @angular/material components
import 'hammerjs';

import {MainViewComponent} from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
