import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlogindefComponent } from './afterlogindef.component';

describe('AfterlogindefComponent', () => {
  let component: AfterlogindefComponent;
  let fixture: ComponentFixture<AfterlogindefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterlogindefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterlogindefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
