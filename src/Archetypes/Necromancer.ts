import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Necromancer extends Arquetype {
  readonly energy = 'mana';
  constructor(name: string) {
    super(name);
    Necromancer.addNecromancer();
  }

  static NecromancerCounter = 0;

  private static addNecromancer() {
    this.NecromancerCounter += 1;
  }

  get name() :string {
    return this.name;
  }

  static createdArchetypeInstances() :number {
    return this.NecromancerCounter;
  }

  get energyType() : EnergyType {
    return this.energy;
  }
}