import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacDuctingComponent } from './hvac-ducting.component';

describe('HvacDuctingComponent', () => {
  let component: HvacDuctingComponent;
  let fixture: ComponentFixture<HvacDuctingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvacDuctingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacDuctingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
