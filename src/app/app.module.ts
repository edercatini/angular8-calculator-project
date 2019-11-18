import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator';
import { TestModule } from './test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
