import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';
import { KeypadComponent } from './components/keypad/keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    KeypadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
