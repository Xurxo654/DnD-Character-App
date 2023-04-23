import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventuringComponent } from './adventuring.component';

describe('AdventuringComponent', () => {
  let component: AdventuringComponent;
  let fixture: ComponentFixture<AdventuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
