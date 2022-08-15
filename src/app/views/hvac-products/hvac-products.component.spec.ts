import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacProductsComponent } from './hvac-products.component';

describe('HvacProductsComponent', () => {
  let component: HvacProductsComponent;
  let fixture: ComponentFixture<HvacProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvacProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
