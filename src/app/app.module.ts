import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { capitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    capitalizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
