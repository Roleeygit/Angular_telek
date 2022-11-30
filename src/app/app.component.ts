// File: app.component.ts
// Author: Juhász Roland
// Copyright: 2022, Juhász Roland
// Group: Szoft II N
// Date: 2022-11-25
// Github: https://github.com/Roleygit
// Licenc: GNU GPL

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  name = "Juhász Roland";
  class = "Szoft II N";
  date = "2022-11-25";

  aSite !: number;
  bSite !: number;
  area  !: number;
  show   : boolean = false;
  twosite = 2;

  calcArea():void
  {
    this.area = (this.aSite * this.bSite) * this.twosite;
    this.timeShow()
  }

  timeShow():void 
  {
    this.show = true;
  }
}
