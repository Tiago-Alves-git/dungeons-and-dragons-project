import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Warrior extends Arquetype {
  readonly energy = 'stamina';
  constructor(name: string) {
    super(name);
    Warrior.addWarrior();
  }

  static WarriorCounter = 0;

  private static addWarrior() {
    this.WarriorCounter += 1;
  }

  get name() :string {
    return this.name;
  }

  static createdArchetypeInstances() :number {
    return this.WarriorCounter;
  }

  get energyType() :EnergyType {
    return this.energy;
  }
}