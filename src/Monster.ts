import { SimpleFighter } from './Fighter';
// import getRandomInt from './utils';

export default class Monster implements SimpleFighter {
  private _lifePoints : number;
  private _strength : number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(0, this._lifePoints - attackPoints);
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    this._lifePoints -= damage;
    this._lifePoints = this._lifePoints <= 0 ? -1 
      : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy : SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}