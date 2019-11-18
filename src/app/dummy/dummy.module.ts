import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './components/dummy.component';

@NgModule({
  declarations: [DummyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent
  ]
})
export class DummyModule { }
