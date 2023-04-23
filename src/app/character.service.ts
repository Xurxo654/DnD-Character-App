import {Injectable} from '@angular/core';
import {CharacterAbility, CharacterSkill} from "./character";
import {BehaviorSubject, Observable, of} from "rxjs";
import {IAbility, ISkill} from "./IAbility";
import {ABILITY_SKILLS} from "./global-constants";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  name: string | undefined;
  profBonus: number;
  class: string | undefined;
  race: string | undefined;
  level: number;
  charAbilities: Map<String, CharacterAbility>;
  charSkills: Map<String, CharacterSkill>;

  abilitySkills = ABILITY_SKILLS;
  abilityData: IAbility[] = [];
  adventureData$: BehaviorSubject<IAbility[]> = new BehaviorSubject<IAbility[]>([]);
  adventuringData$: Observable<IAbility[]>;

  constructor() {
    this.profBonus = 2;
    this.level = 1;
    this.charAbilities = this.initAbilities();
    this.charSkills = this.initSkill()
    this.updateAbilityData();
    this.adventureData$ = new BehaviorSubject<IAbility[]>(this.abilityData);
    this.adventuringData$  = this.adventureData$.asObservable();
  }

  initAbilities(): Map<String, CharacterAbility> {
    console.log('Initializing Abilities');
    const map = new Map<String, CharacterAbility>();
    const attr = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    attr.forEach(a => {
      const ability: CharacterAbility = {
        name: a,
        proficiency: 0,
        level: 0,
        mod: -5,
        savingMod: -5
      }
      map.set(a, ability)
    });
    return map;
  }

  initSkill(): Map<String, CharacterSkill> {
    console.log('Initializing Skills');
    const map = new Map<String, CharacterSkill>();
    const skills = ['Athletics', 'Acrobatics', 'Sleight of Hand', 'Stealth', 'Arcana', 'History', 'Investigation', 'Nature', 'Religion', 'Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival', 'Deception', 'Intimidation', 'Performance', 'Persuasion']
    skills.forEach(s => {
      const skill: CharacterSkill = {
        name: s,
        proficiency: 0,
        mod: -5
      }
      map.set(s, skill)
    });
    return map;
  }

  updateAbilityData(): void {
    const abilities: IAbility[] = [];
    this.abilitySkills.forEach((value, key, map) => {
      const ability = this.charAbilities.get(key);
      if (ability != undefined) {
        const skillList: ISkill[] = [];
        value.forEach(skill => {
          const charSkill = this.charSkills.get(skill);
          if (charSkill != undefined) {
            const iSkill: ISkill = {
              proficiency: charSkill.proficiency,
              name: charSkill.name,
              modifier: charSkill.mod
            };
            skillList.push(iSkill);
          }
        });
        const iAbility: IAbility = {
          name: ability.name,
          level: ability.level,
          modifier: ability.mod,
          save: ability.mod + (ability.proficiency * this.profBonus),
          skills: skillList
        }
        abilities.push(iAbility);
      }
    });
    this.abilityData = abilities;
    this.adventureData$.next(abilities);
  }

  setName(name: string): void {
    this.name = name;
  }

  setLevel(level: number): void {
    if (level < 1 || level > 20) {
      return;
    }
    this.level = level;
    this.profBonus = Math.floor((this.level - 1) / 4);
    this.calcSkillModifiers()
    this.updateAbilityData();
  }

  setSkillProf(prof: number, skillName: string): void {
    const skill = this.charSkills.get(skillName);
    if (skill != undefined) {
      skill.proficiency = prof;
      this.charSkills.set(skillName, skill);
    }
    this.calcSkillModifiers();
    this.updateAbilityData();
  }

  setAbilityProf(prof: number, abilityName: string): void {
    const ability = this.charAbilities.get(abilityName);
    if (ability != undefined) {
      ability.proficiency = prof;
      this.charAbilities.set(abilityName, ability);
    }
    this.calcSkillModifiers();
    this.updateAbilityData();
  }

  setAbilityLevel(level: number, abilityName: string): void {
    //console.log('setAbilityLevel: level: ' + level + ', ' + 'abilityName: ' + abilityName);
    const ability = this.charAbilities.get(abilityName);
    if (ability != undefined) {
      ability.level = level;
      ability.mod = Math.floor((level - 10)/ 2);
      ability.savingMod = ability.mod + (ability.proficiency * this.profBonus);
      this.charAbilities.set(abilityName, ability);
    } else {
      console.log('couldn\'t find: ' + abilityName);
    }
    this.calcSkillModifiers();
    this.updateAbilityData();
  }

  calcSkillModifiers(): void {
    this.abilitySkills.forEach((value, key, map) => {
      const ability = this.charAbilities.get(key);
      if (ability != undefined) {
        value.forEach(skill => {
          const charSkill = this.charSkills.get(skill);
          if (charSkill != undefined) {
            charSkill.mod = ability.mod + this.profBonus * charSkill.proficiency;
            this.charSkills.set(skill, charSkill);
          }
        });
      }
    });
  }

  // Ability mod by level Math.floor((this.level - 10)/ 2);
  //
}
