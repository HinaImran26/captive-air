import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacBushProductsComponent } from './hvac-bush-products.component';

describe('HvacBushProductsComponent', () => {
  let component: HvacBushProductsComponent;
  let fixture: ComponentFixture<HvacBushProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HvacBushProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvacBushProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
