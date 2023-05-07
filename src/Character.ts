import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race : Race;
  private _archetype :Archetype;
  private _maxLifePoints :number;
  private _lifePoints :number;
  private _strength :number;
  private _defense :number;
  private _dexterity :number;
  private _energy :Energy;
  private _name :string;
  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() :Race {
    return this._race;
  }

  get archetype() :Archetype {
    return this._archetype;
  }

  get defense() :number {
    return this._defense;
  }

  get strength() :number {
    return this._strength;
  }

  get lifePoints() :number {
    return this._lifePoints;
  }

  get dexterity() :number {
    return this._dexterity;
  }

  get energy() :Energy {
    const result = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return result;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(0, attackPoints - this._defense);
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    this._lifePoints -= damage;
    this._lifePoints = this._lifePoints <= 0 ? -1 
      : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._maxLifePoints = this._maxLifePoints > this.race.maxLifePoints 
      ? this.race.maxLifePoints : this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    this.attack(enemy);
    this.attack(enemy);
  }
}
