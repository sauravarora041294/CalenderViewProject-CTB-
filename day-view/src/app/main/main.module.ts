import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MainComponent } from './main.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
