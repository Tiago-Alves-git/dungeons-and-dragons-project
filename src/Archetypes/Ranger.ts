import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Ranger extends Arquetype {
  readonly energy = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger.addRanger();
  }

  static RangerCounter = 0;

  private static addRanger() {
    this.RangerCounter += 1;
  }

  get name() :string {
    return this.name;
  }

  static createdArchetypeInstances() :number {
    return this.RangerCounter;
  }

  get energyType() :EnergyType {
    return this.energy;
  }
}