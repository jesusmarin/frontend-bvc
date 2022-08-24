import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRegisterComponent } from './filter-register.component';

describe('FilterRegisterComponent', () => {
  let component: FilterRegisterComponent;
  let fixture: ComponentFixture<FilterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
