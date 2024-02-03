import { ElementRef } from '@angular/core';
import { Component, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';

import { progress } from '../../utils';



export class SliderModel {
  public constructor(
    public readonly from: number,
    public readonly to: number,
    public readonly value: number,
  ) {}

  public progress() {
    return progress(this.from, this.to, this.value);
  }
}

@Component({
  imports: [ ],
  standalone: true,
  selector: 'a-slider',
  templateUrl: 'slider.atom.html',
  styleUrl: 'slider.atom.scss',
})
export class AtomSliderComponent implements OnChanges {
  @Input() public readonly model: SliderModel;

  @ViewChild('pointer', { read: HTMLElement })
  public readonly pointer!: ElementRef<HTMLElement>;

  private _movePointer() {
    this._renderer.setStyle(
      this.pointer.nativeElement,
      'left',
      `${this.model.progress()}%`,
    );
  }

  public constructor(private _renderer: Renderer2) {
    this.model = new SliderModel(0, 0, 0);
  }

  public ngOnChanges() {
    /**
     * Can be optimised with a function reference, which is changed when view is
     * initialised.
    **/
    if (this.pointer) {
      this._movePointer();
    }
  }
}