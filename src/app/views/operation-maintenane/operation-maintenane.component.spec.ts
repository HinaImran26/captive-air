import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMaintenaneComponent } from './operation-maintenane.component';

describe('OperationMaintenaneComponent', () => {
  let component: OperationMaintenaneComponent;
  let fixture: ComponentFixture<OperationMaintenaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationMaintenaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMaintenaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
