export default abstract class Race {
  readonly _name: string;
  readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static racesCounter = 0;

  static createdRacesInstances() :number {
    if (this.racesCounter === 0) {
      throw new Error('Not implemented');
    }
    return this.racesCounter;
  }

  abstract get maxLifePoints() : number;
}