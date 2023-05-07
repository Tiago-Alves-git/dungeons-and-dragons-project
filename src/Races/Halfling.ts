import Race from './Race';

export default class Halfling extends Race {
  readonly _name: string;
  readonly _dexterity: number;
  readonly _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 60;
    Halfling.addHalfiling();
  }

  static halflingCounter = 0;

  private static addHalfiling() {
    this.halflingCounter += 1;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() :number {
    return this.halflingCounter;
  }
}