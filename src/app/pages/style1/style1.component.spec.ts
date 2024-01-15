import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Style1Component } from './style1.component';

describe('Style1Component', () => {
  let component: Style1Component;
  let fixture: ComponentFixture<Style1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Style1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Style1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
