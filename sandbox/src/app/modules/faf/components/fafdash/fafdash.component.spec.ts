import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FafdashComponent } from './fafdash.component';

describe('FafdashComponent', () => {
  let component: FafdashComponent;
  let fixture: ComponentFixture<FafdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FafdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FafdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
