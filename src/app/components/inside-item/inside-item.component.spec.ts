import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideItemComponent } from './inside-item.component';

describe('InsideItemComponent', () => {
  let component: InsideItemComponent;
  let fixture: ComponentFixture<InsideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
