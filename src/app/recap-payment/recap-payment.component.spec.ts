import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapPaymentComponent } from './recap-payment.component';

describe('RecapPaymentComponent', () => {
  let component: RecapPaymentComponent;
  let fixture: ComponentFixture<RecapPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
