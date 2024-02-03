import { NgModule } from '@angular/core';

import { AtomSliderComponent, AtomNumberComponent } from './atoms/public_api';



@NgModule({
  imports: [ AtomSliderComponent, AtomNumberComponent ],
  exports: [ AtomSliderComponent, AtomNumberComponent ],
})
export class LookNPlayModule { }
