import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";
import {Observable} from "rxjs";
import {IAbility} from "../IAbility";

@Component({
  selector: 'dnd-adventuring',
  templateUrl: './adventuring.component.html',
  styleUrls: ['./adventuring.component.scss']
})
export class AdventuringComponent implements OnInit {

  abilities$: Observable<IAbility[]>;

  constructor(private characterService: CharacterService) {
    this.abilities$ = this.characterService.adventuringData$
  }

  ngOnInit(): void {
  }

  levelUpAbility(level: number, name: string) {
    level = level === 20 ? 0 : level + 1;
    this.characterService.setAbilityLevel(level, name);
  }

  incSkillProf(proficiency: number, skill: string) {
    proficiency = proficiency === 2 ? 0 : proficiency + 1;
    this.characterService.setSkillProf(proficiency, skill);
  }
}
