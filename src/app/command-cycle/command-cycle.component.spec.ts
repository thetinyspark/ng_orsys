import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandCycleComponent } from './command-cycle.component';

describe('CommandCycleComponent', () => {
  let component: CommandCycleComponent;
  let fixture: ComponentFixture<CommandCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
