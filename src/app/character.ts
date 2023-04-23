export class Character {
  name: string;
  profBonus: number;
  class: string;
  race: string;
  level: number;

  constructor(name: string) {
    this.name = name;
    this.profBonus = 2;
    this.class = '';
    this.race = '';
    this.level = 1;
  }

}

export interface CharacterAbility {
  name: string;
  proficiency: number;
  level: number;
  mod: number;
  savingMod: number;
}

export interface CharacterSkill {
  name: string;
  proficiency: number;
  mod: number;
}

export interface CharacterAbilitySkills extends CharacterAbility{
  skills: CharacterSkill[];
}
