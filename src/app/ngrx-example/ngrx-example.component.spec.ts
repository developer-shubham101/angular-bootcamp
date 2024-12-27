import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGRxExampleComponent } from './ngrx-example.component';

describe('NGRxExampleComponent', () => {
  let component: NGRxExampleComponent;
  let fixture: ComponentFixture<NGRxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGRxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NGRxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
