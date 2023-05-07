import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Mage extends Arquetype {
  readonly energy = 'mana';
  constructor(name: string) {
    super(name);
    Mage.addMage();
  }

  static mageCounter = 0;

  private static addMage() {
    this.mageCounter += 1;
  }

  get name() :string {
    return this.name;
  }

  static createdArchetypeInstances() :number {
    return this.mageCounter;
  }

  get energyType() :EnergyType {
    return this.energy;
  }
}