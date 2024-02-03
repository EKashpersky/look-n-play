import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';

import { NumberModel, SliderModel } from 'look-n-play';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  public slider: SliderModel;
  public number: NumberModel;

  public constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {
    this.slider = new SliderModel(0, 100, 47.7);
    this.number = new NumberModel(201.7, 10, true);
  }

  public ngAfterViewInit(): void {
    /**
     * Link-up colour-scheme to document
    **/
    this._renderer2.addClass(this._document.body, 'theme-light');
  }
}
