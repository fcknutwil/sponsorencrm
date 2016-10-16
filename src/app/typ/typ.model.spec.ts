import { Typ } from './typ.model';

describe('TypModel', () => {

  it('Typ constructor -> default editable', () => {
    let typ = new Typ('Test');
    expect(typ.getName()).toEqual('Test');
    expect(typ.isEditable()).toBeFalsy();
  });

  it('Typ constructor -> editable vom parameter', () => {
    let typ = new Typ('Test', true);
    expect(typ.getName()).toEqual('Test');
    expect(typ.isEditable()).toBeTruthy();
  });

});
