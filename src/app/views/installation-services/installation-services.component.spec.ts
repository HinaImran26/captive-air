import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationServicesComponent } from './installation-services.component';

describe('InstallationServicesComponent', () => {
  let component: InstallationServicesComponent;
  let fixture: ComponentFixture<InstallationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
