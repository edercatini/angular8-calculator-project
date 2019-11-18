import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator';
import { TestModule } from './test';
import { DummyModule } from './dummy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    TestModule,
    DummyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
