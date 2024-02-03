import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2
} from '@angular/core';
import { steppedValue } from '../../utils';



export class NumberModel {
  public readonly steppedValue: number;

  public constructor(
    public readonly value: number,
    public readonly step: number,
    public readonly roundUpTo: boolean,
  ) {
    this.steppedValue = steppedValue(this.value, this.step, this.roundUpTo);
  }
}

@Component({
  imports: [],
  standalone: true,
  selector: 'a-number',
  templateUrl: 'number.atom.html',
  styleUrls: ['../../../typography.scss', 'number.atom.scss']
})
export class AtomNumberComponent {
  @Input() public readonly model: NumberModel;

  public constructor(
    private _host: ElementRef<HTMLElement>,
    private _renderer: Renderer2,
  ) {
    this.model = new NumberModel(0, 0, false);
  }
}
