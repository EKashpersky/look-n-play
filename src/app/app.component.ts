import { Component } from '@angular/core';

import { NumberModel, SliderModel } from 'look-n-play';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public slider: SliderModel;
  public number: NumberModel;

  public constructor() {
    this.slider = new SliderModel(0, 100, 47.7);
    this.number = new NumberModel(201.7, 10, true);
  }
}
