export const skillToAbilityMap: Map<String, String> = new Map<string, string>([
  ['Athletics', 'Strength'],
  ['Acrobatics', 'Dexterity'],
  ['Sleight of Hand', 'Dexterity'],
  ['Stealth', 'Dexterity'],
  ['Arcana', 'Intelligence'],
  ['History', 'Intelligence'],
  ['Investigation', 'Intelligence'],
  ['Nature', 'Intelligence'],
  ['Religion', 'Intelligence'],
  ['Animal Handling', 'Wisdom'],
  ['Insight', 'Wisdom'],
  ['Medicine', 'Wisdom'],
  ['Perception', 'Wisdom'],
  ['Survival', 'Wisdom'],
  ['Deception', 'Charisma'],
  ['Intimidation', 'Charisma'],
  ['Performance', 'Charisma'],
  ['Persuasion', 'Charisma'],
]);

export const ABILITY_SKILLS: Map<string, string[]> = new Map<string, string[]>([
  ['Strength', ['Athletics']],
  ['Dexterity', ['Acrobatics', 'Sleight of Hand', 'Stealth']],
  ['Constitution', []],
  ['Intelligence', ['Arcana', 'History', 'Investigation', 'Nature', 'Religion']],
  ['Wisdom', ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']],
  ['Charisma', ['Deception', 'Intimidation', 'Performance', 'Persuasion']],
]);
