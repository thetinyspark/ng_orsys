import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStagiaireComponent } from './random-stagiaire.component';

describe('RandomStagiaireComponent', () => {
  let component: RandomStagiaireComponent;
  let fixture: ComponentFixture<RandomStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
