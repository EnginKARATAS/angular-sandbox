import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FafModule } from './modules/faf/faf.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FafModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
