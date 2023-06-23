import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvokeUserExitComponent } from './invoke-user-exit.component';

describe('InvokeUserExitComponent', () => {
  let component: InvokeUserExitComponent;
  let fixture: ComponentFixture<InvokeUserExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvokeUserExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvokeUserExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
