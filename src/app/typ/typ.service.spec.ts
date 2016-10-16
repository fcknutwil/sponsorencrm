import { TypService } from './typ.service';


describe('TypService', () => {

  it('getTyps() -> korrekte Anzahl Typen sollen geliefert werden.', () => {
    let service = new TypService();
    let typs = service.getTyps();
    expect(typs.length).toEqual(4);
  });

});
