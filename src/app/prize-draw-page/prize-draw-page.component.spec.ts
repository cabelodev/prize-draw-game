import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeDrawPageComponent } from './prize-draw-page.component';

describe('PrizeDrawPageComponent', () => {
  let component: PrizeDrawPageComponent;
  let fixture: ComponentFixture<PrizeDrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeDrawPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeDrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
