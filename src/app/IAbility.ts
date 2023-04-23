export interface IAbility {
  name: string;
  level: number;
  modifier: number;
  save: number;
  skills: ISkill[];
}

export interface ISkill {
  proficiency: number;
  name: string;
  modifier: number;
}
