import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W1Component } from './w1.component';

describe('W1Component', () => {
  let component: W1Component;
  let fixture: ComponentFixture<W1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(W1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
