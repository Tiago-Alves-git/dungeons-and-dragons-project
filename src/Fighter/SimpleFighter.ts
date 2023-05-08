// import Fighter from './Fighter';

export default interface SimpleFighter {
  lifePoints : number,
  strength : number;

  attack(enemy: SimpleFighter) :void;
  receiveDamage(attackPoints: number) :number;
}