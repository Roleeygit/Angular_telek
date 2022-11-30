// File: app.module.ts
// Author: Juhász Roland
// Copyright: 2022, Juhász Roland
// Group: Szoft II N
// Date: 2022-11-25
// Github: https://github.com/Roleygit
// Licenc: GNU GPL

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
