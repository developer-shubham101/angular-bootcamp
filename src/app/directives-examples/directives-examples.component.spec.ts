import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExamplesComponent } from './directives-examples.component';

describe('DirectivesExamplesComponent', () => {
  let component: DirectivesExamplesComponent;
  let fixture: ComponentFixture<DirectivesExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
