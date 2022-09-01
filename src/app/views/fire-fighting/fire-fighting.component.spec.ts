import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFightingComponent } from './fire-fighting.component';

describe('FireFightingComponent', () => {
  let component: FireFightingComponent;
  let fixture: ComponentFixture<FireFightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireFightingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireFightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
