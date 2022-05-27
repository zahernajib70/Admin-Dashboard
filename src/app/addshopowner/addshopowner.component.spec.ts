import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshopownerComponent } from './addshopowner.component';

describe('AddshopownerComponent', () => {
  let component: AddshopownerComponent;
  let fixture: ComponentFixture<AddshopownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshopownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshopownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
