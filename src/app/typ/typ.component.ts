import { Component } from '@angular/core';

import { Typ } from './typ.model';
import { TypService } from './typ.service';

@Component ({
  selector: 'my-typ',
  templateUrl: './typ.component.html'
})
export class TypComponent {

  public typs: Array<Typ>;

  constructor(private service: TypService) {
    this.typs = service.getTyps();
  }
}
