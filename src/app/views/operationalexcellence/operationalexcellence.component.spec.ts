import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalexcellenceComponent } from './operationalexcellence.component';

describe('OperationalexcellenceComponent', () => {
  let component: OperationalexcellenceComponent;
  let fixture: ComponentFixture<OperationalexcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalexcellenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalexcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
