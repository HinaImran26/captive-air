import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshAirTreatmentComponent } from './fresh-air-treatment.component';

describe('FreshAirTreatmentComponent', () => {
  let component: FreshAirTreatmentComponent;
  let fixture: ComponentFixture<FreshAirTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshAirTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshAirTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
