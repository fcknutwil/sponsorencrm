import { Injectable} from '@angular/core';

import { Typ } from './typ.model';

@Injectable()
export class TypService {

  public getTyps(): Array<Typ> {
    return [
      new Typ('Hauptsponsor'),
      new Typ('Ausrüster'),
      new Typ('Teamsponsor'),
      new Typ('Bandenwerbung', true)
    ];
  }

}
