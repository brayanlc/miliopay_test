import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagComponent } from './flag.component';

describe('FlagComponent', () => {
  let component: FlagComponent;
  let fixture: ComponentFixture<FlagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlagComponent]
    });
    fixture = TestBed.createComponent(FlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
